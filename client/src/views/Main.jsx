import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    // STATE
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // useEffect
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')  //getting list of products
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [products]); //this is where the page will update again if database changes

    //REMOVE/DELETE PRODUCT
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    // MAIN PAGE
    return (
        <div className="container text-center">
            <div>
                <ProductForm />
                <hr />
                <h1>All Products:</h1>
                <div className="card mt-3 pd-3">
                    <div className="card-body mt-3">{loaded && <ProductList products={products} removeFromDom={removeFromDom} />}</div>
                </div>
            </div>
        </div>
    )
}

export default Main;


    // //message is the variable that represents the state. setMessage is a function allowing us to change the state.
    // const [message, setMessage] = useState("Loading...");
    // // execute logic as soon as component is rendered
    // useEffect(() => {
    //     //using axios to make a request to the backend.
    //     axios.get('http://localhost:8000/api')
    //         .then(res => {
    //             // response back from the backend. setMessage is what we use to change the state.
    //             setMessage(res.data.message)
    //         })
    //         .catch(err => console.error(err))
    // }, []); 
