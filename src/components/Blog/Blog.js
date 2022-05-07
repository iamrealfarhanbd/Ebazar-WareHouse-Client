import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import MetaData from '../layout/MetaData';

const Blog = () => {
    return (
        <>
           <MetaData title="Ebazar - Blog" />

            <Container>
                <h2 className='text-center p-3'> My Blog Section</h2>
                <Row>
                    <Col xs={12} md={6} className="mt-5">
                        <Card>
                            <Card.Header as="h5"> Difference between javascript and nodejs?
                            </Card.Header>
                            <Card.Body>
                                <Card.Text> There are many services that firebase provides.</Card.Text>
                                <ul>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Storage</li>
                                    <li>Hosting</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                    <li>Cloud Messaging</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <Card>
                            <Card.Header as="h5">When should you use nodejs and when should you use mongodb?</Card.Header>
                            <Card.Body>
                            <Card.Text> Authentication -</Card.Text>
                                <ul>
                                    <li>Verifies the user's identity.</li>
                                    <li>It is visible to the user.</li>
                                    <li>It is Changeable by the user.</li>
                                </ul>
                                <Card.Text> Authorization - </Card.Text>
                                <ul>
                                    <li>Grants or denies permission to the user do something.</li>
                                    <li>It is not visible to the user.</li>
                                    <li>It cannot be changed by the user. </li>
                                </ul>
                     
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <Card>
                            <Card.Header as="h5">Differences between sql and nosql databases.? </Card.Header>
                            <Card.Body>
                            <Card.Text>Firebase is a complete backend solution that can manage authentication, real-time database and hosting as well. You can use firebase in iOS apps, android apps and even in web apps. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <Card>
                            <Card.Header as="h5">What is the purpose of jwt and how does it work? </Card.Header>
                            <Card.Body>
                            <Card.Text> Options for authentication -  </Card.Text>
                                <ul>
                                    <li>Password-based authentication</li>
                                    <li>Two-factor/multi factor authentication</li>
                                    <li>Biometric authentication</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Blog;