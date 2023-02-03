import { useEffect, useState } from "react";

const useProductDetails = productId =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        fetchData();

    }, [productId]);
    const fetchData = async () => {
        try {
          const res = await fetch(`https://ebazar-warehouse-server.onrender.com/product/${productId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await res.json();
          if (!result.error) {
            setProduct(result);
         
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      };
    return [product]
}

export default useProductDetails;