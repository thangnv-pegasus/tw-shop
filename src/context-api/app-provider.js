import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useFirestore from "~/hooks/useFirsestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firebase_store } from "~/config/firebase-config";
import LoadingSpinner from "~/components/spiner";
import { AuthContext } from "./auth-provider";
import Menu from "~/components/menu";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [inforOrder, setInforOrder] = useState({});
  const { user } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

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
    <AppContext.Provider
      value={{
        products,
        setProducts,
        posts,
        setInforOrder,
        inforOrder,
        openMenu,
        setOpenMenu,
      }}
    >
      {posts.length === 0 || products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          {children}
          {openMenu && <Menu />}
        </>
      )}
    </AppContext.Provider>
  );
};

export default AppProvider;
