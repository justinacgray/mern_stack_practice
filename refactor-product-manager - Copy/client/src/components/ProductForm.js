import React, { useState, useEffect } from 'react'
import AllProducts from './AllProducts'
import { Form, Button } from 'react-bootstrap'
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const ProductForm = (props) => {
    const { setTitle, setPrice, setDescription, errors, handleFormSubmit, title, price, description, buttonLabel} = props

    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="title"
                    value={title}    
                    onChange={ (e) => setTitle(e.target.value) }
                    placeholder="Title of item" />
                    {
                        errors.title ?
                        <span>{ errors.title.message }</span>
                        : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="price"
                    value={price}    
                    onChange={ (e) => setPrice(e.target.value) } 
                    placeholder="The cost of the item" />
                    {
                        errors.price ?
                        <span>{ errors.price.message }</span>
                        : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    type="textarea" 
                    name="description"
                    value={description}    
                    onChange={ (e) => setDescription(e.target.value) }
                    placeholder="Describe the item" as="textarea"/>
                    {
                        errors.description ?
                        <span>{ errors.description.message }</span>
                        : null
                    }
                </Form.Group>

                <Button variant="primary" type="submit">
                    {buttonLabel}
                </Button>

                <Button onClick={() => navigate("/products/")} variant="danger" type="submit">
                    Cancel
                </Button>
            </Form>
            
        </div>
    )
}

export default ProductForm

