
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';
import Allproduct from '../Allproduct/Allproduct';
import HomeProductCard from '../Allproduct/HomeProductCard/HomeProductCard';

import './Home.css';
const Home = () => {
    const navigate = useNavigate();
    const [products] = useAllProducts([])
    return (
        <>
            <section className="HeroSection">
                <div className="d-flex img-bg align-items-center" id='HeroSection'>
                    <div className="container">
                        <div className="row justify-content-end align-items-center" >
                            <div className=" col-md-6">
                            <h1 className="Hero_section_Heading ">The next evolution of <strong>Ebazar WareHouse?</strong></h1>
                                <p className="Hero_section_Paragraph">DAchieve complete control of your products — and instant clarity across suppliers, production, inventory and customers.</p>
                                <Button size="lg" variant="warning" onClick={() => navigate("/Allproduct")}> Start Your Free Trail</Button>
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

            <section className='ExtraSectionOne p-5 text-center'>
                <h2 className='p-5'>Subscribe now for manage your stock</h2>
                <form action="" className='d-flex flex-column align-items-center' method="post">
                    <input type="email" className='email' name="email" placeholder='Subscribe Us'  />
                    <input type="submit" className='submit mt-2 ' value="submit" />
                </form>
            </section>

            <section className="ExtraSectiontwo">
                <div className="d-flex img-bg align-items-center" id='ExtraSectiontwo'>
                    <div className="container">
                        <div className="row justify-content-end align-items-center" >
                            <div className=" col-md-6">
                                <h1 className="Hero_section_Heading "><strong>Ebazar WareHouse</strong> that’s perfect for manufacturers, wholesalers and distributors, everywhere.
                                 </h1>
                                
                            </div>
                            <div className=" col-md-6">
                               <div className="text-center">
                               <img src="../images/inventroy.png" alt="" className='img-fluid w-100' />
                                <Button size="lg" className='mt-5' variant="warning" onClick={() => navigate("/Allproduct")}> All product</Button>
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