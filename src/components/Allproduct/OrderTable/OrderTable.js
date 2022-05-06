import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderTable = ({order,handleDelete}) => {
    
    const navigate = useNavigate();
    const { productname, providername, _id, price, email, quantity,address,phone } = order;
    console.log(order)


    return (
        <>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                      
                        <th>#ID</th>
                        <th>Email</th>
                        <th>Provider Name</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Number</th>
                        <th>Manage Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td>{email}</td>
                        <td>{providername}</td>
                        <td>{productname}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{address}</td>
                        <td>{phone}</td>
                        <td>
                            <Button variant="outline-light mt-1" onClick={() => navigate(`/Allproduct/${_id}`)}>Details</Button>
                            <Button variant='light mt-1' onClick={() => handleDelete(_id)}>Trash</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default OrderTable;
