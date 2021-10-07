import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import ProductForm from './ProductForm'


const EditProduct = (props) => {
    const [ updatedTitle, setUpdatedTitle ] = useState("");
    const [ updatedPrice, setUpdatedPrice ] = useState(0);
    const [ updatedDescription, setUpdatedDescription ] = useState("");

    const [errors, setErrors] = useState({});
    
    
    const updateProductForm = (e) => {
        //the e (event) prevents the default
        e.preventDefault();
        // console.log(title, price, description);
        // call axios to post the object to my api
        axios.put("http://localhost:8000/api/products/update/" + props._id, {
            title : updatedTitle,
            price: updatedPrice,
            description: updatedDescription,
        })
        //on success, redirect to product list
        .then((res) => {
            console.log(res.data);
            // if we have validation errors NOT errors with server
            if(res.data.error){
                setErrors(res.data.error.errors)
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
    
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props._id)
        .then(res => {
            console.log(res);
            setUpdatedTitle(res.data.product.title)
            setUpdatedPrice(res.data.product.price)
            setUpdatedDescription(res.data.product.description)
        })
    }, [props._id]);
    
    return (
        <div>
            <ProductForm setTitle={setUpdatedTitle} setPrice={setUpdatedPrice} setDescription={setUpdatedDescription} errors={errors} handleFormSubmit={updateProductForm} title={updatedTitle} price={updatedPrice} description={updatedDescription}  buttonLabel={"Save Changes"} />
        </div>
    )
}

export default EditProduct


