import { useEffect, useState } from "react";

const useProductDetails = productId =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://ebazar-warehouse-server.onrender.com/product/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [productId]);
    return [product]
}

export default useProductDetails;