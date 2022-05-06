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
    const { register, handleSubmit ,reset } = useForm();
    const { _id , quantity } = product;
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity);




// console.log(product.quantity)
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            toast('Your Product is Update!!!');
            reset();
        } )
    };
    useEffect( () =>{
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [updatedQuantity]);
    const handleDecreaseQuantity = () => {

        const { quantity, ...rest } = product;
        const previousQuantity = quantity;
        const updatedProduct = { updatedQuantity: previousQuantity - 1, ...rest };
        setUpdatedQuantity(previousQuantity - 1);

        fetch(`http://localhost:5000/updateProduct/${productId}`, {
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
            <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 w-25' placeholder='Quantity' defaultValue={product?.quantity} type="number" {...register("quantity")} />
                <input className='mb-2 w-25' type="submit" value="Add Service" />
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