
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';
import Allproduct from '../Allproduct/Allproduct';
import HomeProductCard from '../Allproduct/HomeProductCard/HomeProductCard';

import './Home.css';
const Home = () => {
    const navigate =useNavigate();
    const [products] = useAllProducts([])
    return (
        <>
            <section className="HeroSection">
                <div className="d-flex img-bg align-items-center" id='HeroSection'>
                    <div className="container">
                        <div className="row justify-content-end" >
                            <div className=" col-md-6">
                                <h1 className="Hero_section_Heading ">LOVE <strong>Ebazar WareHouse?</strong></h1>
                                <p className="Hero_section_Paragraph">Digital Ebazar WareHouse School has what you need to take your Ebazar WareHouse to the next level. We offer daily tips, resources and free tutorials that will help you get the most out your camera and create stunning photos</p>
                                <Button size="lg" variant="warning" onClick={()=>navigate("/Allproduct")}> All product</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className='mx-auto my-5'>
                <Row >
                    {products.map(product => <HomeProductCard key={product._id} product={product} />)}
                </Row>
            </Container>
            </section>
        </>
    );
};

export default Home;