import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useProductDetails';

const DetailsCourse = () => {
    const { productId } = useParams();
    const [service] = useServiceDetail(productId);
    return (
        <section class="p-5 bg-dark text-light" id="learn ">
        <Container className='text-center '>
            <Row>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${productId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
            </Row>
        </Container>
        </section>
    );
};   

export default DetailsCourse;