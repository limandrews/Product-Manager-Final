import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
    }

    return (
        <div className="container w-50">
            <form onSubmit={onSubmitHandler}>
                <h1 className='text-center'>Product Manager</h1>
                <div className="row mb-3">
                        <label className="col-sm-2 col-form-label mb-3">Title</label>
                        <div className="col-sm-10"><input className="form-control" type="text" onChange={e=>setTitle(e.target.value)}/></div>
                        <label className="col-sm-2 col-form-label mb-3">Price</label>
                        <div className="col-sm-10"><input className="form-control" type="text" onChange={e=>setPrice(e.target.value)}/></div>
                        <label className="col-sm-2 col-form-label mb-3">Description</label>
                        <div className="col-sm-10"><textarea className="form-control" onChange={e=>setDescription(e.target.value)}/></div>
                </div>
                <div className="text-center"><button type="submit">Create</button></div>
            </form>
        </div>
    )
}

export default ProductForm;