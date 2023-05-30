import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useFirestore from "~/hooks/useFirsestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firebase_store } from "~/config/firebase-config";
import LoadingSpinner from "~/components/spiner";
import { AuthContext } from "./auth-provider";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const q = query(collection(firebase_store, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setProducts(arr);
    });
  }, []);

  useEffect(() => {
    const q = query(collection(firebase_store, "blogs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setPosts(arr);
    });
  }, []);

  

  return (
    <AppContext.Provider value={{ products, posts }}>
      {posts.length === 0 || products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>{children}</>
      )}
    </AppContext.Provider>
  );
};

export default AppProvider;
