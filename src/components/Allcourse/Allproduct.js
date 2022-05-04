import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseCard from './CourseCard/CourseCard';

const Allproduct = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(reviewData => setReviews(reviewData))
    }, [])

    return (
        <>
            <Container className='mx-auto my-5'>
                <Row >
                    {reviews.map(review => <CourseCard key={review.id} review={review} />)}
                </Row>
            </Container>
        </>
    );
};

export default Allproduct;