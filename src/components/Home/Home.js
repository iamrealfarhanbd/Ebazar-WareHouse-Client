
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';
import Allproduct from '../Allproduct/Allproduct';
import HomeProductCard from '../Allproduct/HomeProductCard/HomeProductCard';
import MetaData from "../layout/MetaData";
import './Home.css';
const Home = () => {
    const navigate = useNavigate();
    const [products] = useAllProducts([])
    return (
        <>
           <MetaData title="Ebazar -Home" />
            <section className="HeroSection">
                <div className="d-flex img-bg align-items-center" id='HeroSection'>
                    <div className="container">
                        <div className="row justify-content-end align-items-center" >
                            <div className=" col-md-6">
                            <h1 className="Hero_section_Heading ">The All-In-One <strong>Ebazar WareHouse</strong> POS System</h1>
                                <p className="Hero_section_Paragraph">Looking for the best <strong>Ebazar WareHouse</strong>  Bikedesk is a dedicated  <strong>Ebazar WareHouse</strong> management system that makes your life easier and grows your business by more than 10 % each year.</p>
                                <b >Free 14 day trial. No credit card required.</b>
                                <br />
                                <Button className='mt-3' size="lg" variant="warning" onClick={() => navigate("/Allproduct")}> Start Your Free Trail</Button>
                            </div>
                            <div className=" col-md-6">
                                <img src="../images/Marketing.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Container className='mx-auto my-5 center'>
                <Row >
                    <h1 className="Hero_section_Heading text-center ">All  <strong>Ebazar Inventory Product</strong></h1>

                    {products.slice(0, 6).map(product => <HomeProductCard key={product._id} product={product} />)}

                </Row>
                    <div className=" text-center">
                    <Button size="lg" className='mt-5 w-25 ' variant="warning" onClick={() => navigate("/Allproduct")}> All product</Button>
                    </div>

            </Container>

            <section className="ExtraSectionOne">
                <div className="d-flex img-bg align-items-center" id='ExtraSectionOne'>
                    <div className="container">
                        <div className="row justify-content-end align-items-center" >
                        <div className=" col-md-6 p-5">
                               <div className="text-center">
                              <img src="../images/worldmap.png" alt="" className='img-fluid' style={{width:550 ,height:325}}/>
                   
                               </div>

                            </div>
                            <div className=" col-md-6">
                                <h1 className="Hero_section_Heading ">#1 for bike shops 
                                 </h1>
                                 <p>  All features have been co-developed with our customers to make the easiest and most efficient system, which saves you a lot of time.</p>
                               
                            </div>
               
                        </div>
                    </div>
                </div>

            </section>

            <section className="ExtraSectiontwo">
                <div className="d-flex img-bg align-items-center" id='ExtraSectiontwo'>
                    <div className="container">
                        <div className="row justify-content-end align-items-center" >
                            <div className=" col-md-6">
                                <h1 className="Hero_section_Heading ">Everything you need in your <strong>Ebazar WareHouse</strong> 
                                 </h1>
                                 <p><strong>Ebazar WareHouse</strong>  helps you manage everything in your bikeshop, including POS and payments, customer history, products, stock and much more.</p>
                               
                            </div>
                            <div className=" col-md-6 p-5">
                               <div className="text-center">
                               <iframe width="640" height="360" src="https://www.youtube.com/embed/hQww0OJjei0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
                               </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="ExtraSectionthree">
                <div className="d-flex img-bg align-items-center" id='ExtraSectionthree'>
                    <div className="container">
                        <div className="row justify-content-end align-items-center" >
                            <div className=" col-md-6">
                                <h1 className="Hero_section_Heading ">Works on all platforms </h1>
                                 <p><strong>Ebazar WareHouse</strong> is a cloud based system, which works on all platforms with no user limits.</p>
                                 <p>Use it on mac, pc, iPad, mobile etc., even with multiple simultaneous users!</p>
                               
                            </div>
                            <div className=" col-md-6 p-5">
                               <div className="text-center">
                               <img src="../images/computer-ipad-mobil.png" alt="" className='img-fluid' style={{width:550 ,height:325}}/>

                   
                               </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Home;