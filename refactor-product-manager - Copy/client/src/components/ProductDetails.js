import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button } from 'react-bootstrap'

const ProductDetails = (props) => {
    console.log(props._id);
    //create state to hold product details
    // productsDets = variable, setProductDets = function--- the function is usewde to change the variable 
    const [ productDets, setProductDets ] = useState({}); // **this needs to be an object not an array
    // useEffect to retrieve data from my api
    useEffect(() => {
        // axios to call the data
        axios.get("http://localhost:8000/api/products/" + props._id) //why props.id
        .then((res) => {
            console.log(res.data);
            setProductDets(res.data.product); 
        })
        .catch((err) => {
            console.log(err);
        })
    }, [props._id]);
    
    // set State with the details of the api
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/delete/" + productId)
            .then(res => {
                navigate("/products/")
            })
            .catch((err) => {
                console.log(err);
            })
        }
    
    return (
        <div>
            <h3>Product Details</h3>
            {/* show the details*/}
            <p> Title: {productDets.title}</p>
            <p> Price: {productDets.price}</p>
            <p> Description: {productDets.description}</p>
            {/* return to product products button/link */}
            <Link to="/products/">
            <Button variant="primary" type="submit">Back to all Products</Button>
            </Link>
            {/* edit button */}
            <Link to={"/products/edit/" + props._id }>
            <Button variant="info" type="submit">Edit Products</Button>
            </Link>
            {/* delete button */}
            
            <Button onClick={(e)=>{deleteProduct(props._id)}} variant="danger" type="submit">Delete Product</Button>
            
        </div>
    )
}

export default ProductDetails;
