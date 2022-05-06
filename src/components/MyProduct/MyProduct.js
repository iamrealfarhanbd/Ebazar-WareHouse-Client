import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';


const MyProduct = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/myproduct?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setMyProducts(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])
    return (
        <div>
            <h2>My Product: {myProducts.length}</h2>
            {
                myProducts.map(myProduct => <li
                    key={myProduct._id}
                    myProduct={myProduct}
                > {myProduct.name}</li>
                )
            }

        </div>
    );
};

export default MyProduct;