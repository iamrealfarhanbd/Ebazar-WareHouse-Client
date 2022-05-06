import React from 'react';
import { Button, Card, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllProducts from '../../../hooks/useAllProducts';

const AllProductTable = ({product,handleClick}) => {
    const navigate = useNavigate();
    const { name, description, img, _id, price ,email} = product;

console.log(handleClick)

    return (
        <>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>description</th>
                        <th>price</th>
                        <th>Manage Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td><Card.Img variant="top" src={img} style={{width:'80px',height:'80px'}} /></td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{description}</td>
                        <td>{price}</td>
                        <td><Button className='btn btn-primary' onClick={()=>handleClick(_id)}>X</Button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default AllProductTable;
