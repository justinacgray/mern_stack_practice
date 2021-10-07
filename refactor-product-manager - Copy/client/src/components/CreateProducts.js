import React, { useState, useEffect } from 'react'
import ProductForm from './ProductForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const CreateProduct = () => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");

    const [errors, setErrors] = useState({});

    const createProduct = "Create Product"

    const handleFormSubmit = (e) => {
        //the e (event) prevents the default
        e.preventDefault();
        // call axios to post the object to my api
        axios.post("http://localhost:8000/api/products/new", {
            title : title,
            price : price,
            description :  description
        })
        //on success, redirect to product list
        .then((res) => {
            console.log(res.data);
            //if we have validation errors NOT errors with server
            if(res.data.error){
                setErrors(res.data.error.errors)
                // console.log("CHECKING SOMETHING");
            }
            else {
                // on success 
                navigate("/products/");
            }
        })
        //on failure, save errors in state so the user can correct the incorrect inputs
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            {/* setTitle={setUpdatedTitle} */}
            <ProductForm setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} errors={errors} handleFormSubmit={handleFormSubmit} buttonLabel={createProduct} />
        </div>
    )
}

export default CreateProduct;
