import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';
import useProductDetails from '../../hooks/useProductDetails';

const ProductDeatils = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const [products, setProducts] = useAllProducts();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }


    return (
        <section class="p-5 bg-dark text-light" id="learn ">
        <Container className='text-center '>
            <Row>
            <h2>You are about to book: {products.length}</h2>
            <Card.Img variant="top" className='mx-auto' src={product.img} style={{width:'50%',height:400}} />
            <h2>You are about to book: {product.productname}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${productId}`}>
                    <Button className='btn btn-primary'>Proceed Checkout </Button>
                </Link>
                <Button className='btn btn-primary' onClick={() => handleDelete(product._id)}>X</Button>

            </div>
            </Row>
        </Container>
        </section>
    );
};   

export default ProductDeatils;