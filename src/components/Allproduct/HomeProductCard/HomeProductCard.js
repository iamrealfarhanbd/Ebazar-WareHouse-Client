import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {useNavigate, useParams } from 'react-router-dom';

const HomeProductCard = ({product}) => {
    const navigate = useNavigate();
    const { productname, description, img ,_id ,price,providername} = product;
    return (
        <>
            
        </>
    );
};

export default HomeProductCard;
