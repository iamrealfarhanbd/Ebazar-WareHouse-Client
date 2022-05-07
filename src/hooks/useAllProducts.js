import { useEffect, useState } from "react";

const useAllProducts = () =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://ebazzar-warehouse.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
}

export default useAllProducts;