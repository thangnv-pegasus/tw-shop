import { useEffect, useState } from "react";
import { firebase_store } from "~/config/firebase-config";

const { query, where, onSnapshot, collection } = require("firebase/firestore");

const useFirestore = (collection1, condition) => {
  // console.log(collection1)
  const [document, setDocument] = useState([]);

  /*
    condition : {
        fieldName,
        comparator,
        compareValue
    }
  */

  useEffect(() => {
    let q = query(collection(firebase_store, collection1));
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      q = query(
        collection(firebase_store, collection1),
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setDocument(arr);
    });
  }, [collection1, condition]);

  return document;
};

export default useFirestore;
