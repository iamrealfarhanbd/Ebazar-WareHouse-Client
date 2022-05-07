import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
const AllProductTable = ({product,handleClick}) => {
    const navigate = useNavigate();
    const { productname,providername, description, img, _id, price ,email,quantity} = product;
// console.log(product)


    return (
        <>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Provider Name</th>
                        <th>Email</th>
                        <th>description</th>
                        <th>Quantity</th>
                        <th>price</th>
                        <th>Manage Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td><Card.Img variant="top" src={img} style={{width:'80px',height:'80px'}} /></td>
                        <td>{productname}</td>
                        <td>{providername}</td>
                        <td>{email}</td>
                        <td>{description}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>
                            <Button className='btn btn-primary' onClick={()=>navigate(`/update/${_id}`)}>Edit</Button>
                            <Button className='btn btn-danger' onClick={()=>handleClick(_id)}><BsFillTrashFill /> </Button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default AllProductTable;
