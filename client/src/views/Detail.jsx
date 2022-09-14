// THIS IS MY VIEWS PAGE
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { removeFromDom } = props;
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)  //deleting from database
            .then(() => {
                navigate('/products/') // this is how i get redirected to main page after clicking delete
                
            })
            .catch(err => console.error(err));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="container w-50">
            <div>
                <h1 className='text-center'>View Product</h1>
                <div className="row mb-3">
                    <p><Link to={`/products/${product._id}`}>Title: {product.title}</Link></p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <p><Link to={"/products/" + product._id + "/edit"}>Edit</Link></p>
                </div>
                <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
            </div>
        </div>
    )
}
    
export default Detail;

