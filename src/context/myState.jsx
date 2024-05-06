import { useEffect, useState } from "react";
import mycontext from "./mycontext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

function MyState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);

  // User State
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "collection"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
        console.log(productArray)
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductFunction();
  }, []);
  

  return (
    <mycontext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct
      }}
    >
      {children}
    </mycontext.Provider>
  );
}

export default MyState;
