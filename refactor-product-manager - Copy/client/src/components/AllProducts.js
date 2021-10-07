import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Button } from 'react-bootstrap'
import ProductForm from './ProductForm';
import ProductDetails from './ProductDetails';


const AllProducts = (props) => {
    //create an array to hold all products
    //set State to update the page for each new product added
    const [ productList, setProductList ] = useState([]);
    //need to use Effect to immediately the data on
    //need to use axios to get all products from the backend server
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            //set the new data in our state from my api
            setProductList(res.data.products); // needded to add .products my response was a new object with a key of products and the value is the array of product objects
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const removeFromDom = (productId) => {
        setProductList(productList.filter(product => product._id !== productId));
    }

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/delete/" + productId)
            .then(res => {
                removeFromDom(productId);
                navigate("/products/")
            })
            .catch((err) => {
                console.log(err);
            })
        }

    return (
        <div>
            <h3> Product List </h3>
            <Link to={"/products/new" }>
            <Button variant="primary" size="sm" type="submit">Create a product</Button>
            </Link>

            
            {/* map over state to show all products
            create a button to display details  */}
            {
                productList.map((product, index) => (
                    <div key={ index }>
                    <Link to={"/product/" + product._id}>
                        {product.title}
                    </Link>
                    {/* add links edit and delete */}                
                <Button onClick={(e)=>{deleteProduct(product._id)}} variant="outline-danger" size="sm" type="submit">
                    Delete
                </Button>
            
                <Button onClick={() => navigate("/products/" + product._id)} variant="outline-info" size="sm" type="submit">
                    View
                </Button>

                    </div>
                ))
            }      
        </div>
    )
};

export default AllProducts;