import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';

const HomeProductCard = (props) => {
    const navigate = useNavigate();
    const { name, description, img,_id ,price} = props.product;

    return (
        <>
            <Col lg={4} md={6}>
                <Card className='m-2' >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description} 
                        </Card.Text>
                        <Card.Text>
                            {price} 
                        </Card.Text>
                        <span className='d-flex justify-content-between  flex-column '>
                        <Button variant="outline-warning mb-1" onClick={() => navigate('/order')}>Order Now</Button>
                        <Button variant="outline-dark mt-1" onClick={() => navigate(`/Allproduct/${_id}`)}>Read More</Button>
                        </span>
                  
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default HomeProductCard;
