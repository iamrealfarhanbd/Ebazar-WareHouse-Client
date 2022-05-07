import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAllProducts from '../../hooks/useAllProducts';
import useProductDetails from '../../hooks/useProductDetails';

const ProductDeatils = () => {
    const { productId } = useParams();
    // const [product] = useProductDetails(productId);
    const [product, setProduct] = useState({});
    const { _id , quantity } = product;
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity);




// console.log(product.quantity)
 

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const qyt= parseInt(event.target.quantity.value);
        console.log(qyt)
        const { quantity, ...rest } = product;
        const previousQuantity = quantity;
        const updatedProduct = { updatedQuantity: previousQuantity + qyt, ...rest };
        setUpdatedQuantity(updatedProduct);
        
        const url = `https://ebazzar-warehouse.herokuapp.com/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            // toast('Your Product is Update!!!');
            
        } )
    }

    useEffect( () =>{
        const url = `https://ebazzar-warehouse.herokuapp.com/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [updatedQuantity]);
    const handleDecreaseQuantity = () => {

        const { quantity, ...rest } = product;
        const previousQuantity = quantity;
        const updatedProduct = { updatedQuantity: previousQuantity - 1, ...rest };
        setUpdatedQuantity(updatedProduct);

        fetch(`https://ebazzar-warehouse.herokuapp.com/${productId}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('this ',data)
                // setUpdatedQuantity(data)
            })
        console.log(updatedProduct);

    }

    return (
        <section className="p-5 bg-dark text-light" id="learn ">
        <Container className='text-center '>
            <Row>
            <h2>You are about to book: {product.length}</h2>
            <Card.Img variant="top" className='mx-auto' src={product.img} style={{width:'50%',height:400}} />
            <h2>You are about to book: {product.productname}</h2>
            <h2>product quantity: {product.quantity}</h2>
            <h2>product NEW quantity: {product.quantity}</h2>
            <form className='d-flex flex-column align-items-center' onSubmit={handlePlaceOrder}>
            <input className='w-100 mb-2' type="number"  name="quantity" placeholder='quantity' />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            <div className='text-center'>

                <Link to={`/checkout/${productId}`}>
                    <Button className='btn btn-primary'>Proceed Checkout </Button>
                </Link>
                <Button className='btn btn-primary' onClick={handleDecreaseQuantity}>OneX</Button>

            </div>
            </Row>
        </Container>
        </section>
    );
};   

export default ProductDeatils;