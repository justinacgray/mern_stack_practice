import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router';
import AllProducts from './components/AllProducts';
import CreateProduct from './components/CreateProducts';
// import DeleteProduct from './components/DeleteProduct';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome default/>
        <AllProducts path="/products/" />
        <CreateProduct path="/products/new" />
        {/* <DeleteProduct path="/products/delete/:_id" /> */}
        <EditProduct path="/products/edit/:_id" />
        <ProductDetails path="/products/:_id" />
      </Router>
    </div>
  );
}

export default App;
