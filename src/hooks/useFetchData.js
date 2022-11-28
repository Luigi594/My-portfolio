import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../Firebase";

function useFetchData(collectionName, fieldToOrder) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reference = collection(db, collectionName);
    const Query = query(reference, orderBy(fieldToOrder, "asc"));

    onSnapshot(Query, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [collectionName, fieldToOrder]);

  return { data };
}

export default useFetchData;
