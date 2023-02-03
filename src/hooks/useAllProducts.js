import { useEffect, useState } from "react";

const useAllProducts = () =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
          fetchData();
    }, []);
    const fetchData = async () => {
        try {
          const res = await fetch(`https://ebazar-warehouse-server.onrender.com/product`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await res.json();
          if (!result.error) {
            setProducts(result);
         
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      };
    return [products, setProducts]
}

export default useAllProducts;

