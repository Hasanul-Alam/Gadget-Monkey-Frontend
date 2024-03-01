import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    const url = `http://localhost:5000/products/${id}`;
    useEffect( () => {
        axios.get(url)
        .then((res) => setProduct(res.data))
    }, [])

    const handleNameChange = (event) => {
        const updatedProduct = {...product};
        updatedProduct.name = event.target.value;
        setProduct(updatedProduct);
    }
    const handlePriceChange = (event) => {
        const updatedProduct = {...product};
        updatedProduct.price = event.target.value;
        setProduct(updatedProduct);
    }
    const handleQuantityChange = (event) => {
        const updatedProduct = {...product};
        updatedProduct.quantity = event.target.value;
        setProduct(updatedProduct);
    }
    const handleOfferChange = (event) => {
        const updatedProduct = {...product};
        updatedProduct.offer = event.target.value;
        setProduct(updatedProduct);
    }

    const handleUpdateProduct = (event) => {
        const url = `http://localhost:5000/products/${id}`;
        axios.put(url, {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            offer: product.offer
        })
        .then(res => {
            if(res.data.modifiedCount >= 0){
                alert('Alhamdulillah your product is updated successfully.');
                setProduct({})
            }
        })
        event.preventDefault();
    }
    return (
        <div>
            <h1>This is update product.</h1>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleUpdateProduct}>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="fullName">Product Name</label></h6>
                                <input type="text" className="form-control fw-semibold" id="fullName" placeholder="Enter product name" value={product.name || ''} onChange={handleNameChange} required />
                            </div>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="price">Price</label></h6>
                                <input type="number" className="form-control fw-semibold" id="price" placeholder="Enter price" value={product.price || ''} onChange={handlePriceChange} required />
                            </div>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="quantity">Quantity</label></h6>
                                <input type="number" className="form-control fw-semibold" id="quantity" placeholder="Enter quantity" value={product.quantity || ''} onChange={handleQuantityChange} required />
                            </div>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="offer">Offer</label></h6>
                                <input type="number" className="form-control fw-semibold" id="quantity" placeholder="Enter your offer in %" value={product.offer || ''} onChange={handleOfferChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Update Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;