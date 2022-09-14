import React from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.products.map((product, i) => {
                <p key={i}><Link to={`/products/${product._id}`}>{product.title}</Link>, {product.price}, {product.description}</p>
                return <p key={i}>
                    <Link to={"/products/" + product._id}>
                        {product.title}, {product.price}, {product.description}
                    </Link>
                    
                    <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}

        </div>
    )
}
    
export default ProductList;