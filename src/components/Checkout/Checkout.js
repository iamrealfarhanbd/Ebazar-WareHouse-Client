import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import useProductDetails from '../../hooks/useProductDetails';
import auth from '../../firebase.init';

const Checkout = () => {
    const {productId} = useParams();
    const [product] = useProductDetails(productId);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let from = useLocation.state?.from?.pathname || "/";
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            providername: user.displayName,
            productname: product.productname,
            productId: productId,
            quantity: product.quantity,
            price: product.price,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
                navigate(from, { replace: true });

            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {product.productname}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={product.productname} name="product" placeholder='product' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="number" value={product.quantity} name="quantity" placeholder='quantity' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="number" value={product.price} name="quantity" placeholder='quantity' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;