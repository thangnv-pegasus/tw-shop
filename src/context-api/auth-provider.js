import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { createContext, useEffect, useMemo, useState } from "react";
import { firebase_auth, firebase_store } from "~/config/firebase-config";
import useFirestore from "~/hooks/useFirsestore";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    onAuthStateChanged(firebase_auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });

        const q = query(
          collection(firebase_store, "cart"),
          where("uid", "==", uid)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const arr = [];
          querySnapshot.forEach((doc) => {
            arr.push(doc.data());
          });
          setCart(arr);
        });
      } else {
        setCart([]);
      }
    });
  }, []);

  // useEffect(() => {
  //   const q = query(collection(firebase_store, "cart"), where("uid", "==", user?.uid));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const cities = [];
  //     querySnapshot.forEach((doc) => {
  //       cities.push(doc.data().name);
  //     });
  //     console.log('cart',cities);
  //   });
  // }, [user]);

  // console.log(user?.uid);
  return (
    <AuthContext.Provider value={{ user, cart }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
