
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Allproduct from '../Allcourse/Allproduct';

import './Home.css';
const Home = () => {
    const navigate =useNavigate();
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className='text-center'>our servise</h2>
                            <Allproduct />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;