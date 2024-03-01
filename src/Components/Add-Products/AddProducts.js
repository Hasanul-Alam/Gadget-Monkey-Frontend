import axios from 'axios';
import React, { useRef } from 'react';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const offerRef = useRef();

    const handleAddProduct = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const offer = offerRef.current.value;

        const newProduct = {
            name: name,
            price: price,
            quantity: quantity,
            offer: offer
        }

        if (offer >= 100) {
            alert('Offer cannot be more than or equal to 100%.');
        }
        else if (offer < 0) {
            alert('Offer cannot be negative');
        }
        else {
            axios.post('http://localhost:5000/products', newProduct)
                .then(res => {
                    alert('Alhamdulillah your product is successfully added');
                    event.target.reset();
                })
        }

    }
    return (
        <div>
            <h2 className='mt-3'>Please Add Products</h2>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleAddProduct}>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="fullName">Product Name</label></h6>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter product name" ref={nameRef} required />
                            </div>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="price">Price</label></h6>
                                <input type="number" className="form-control" id="price" placeholder="Enter price" ref={priceRef} required />
                            </div>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="quantity">Quantity</label></h6>
                                <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" ref={quantityRef} required />
                            </div>
                            <div className="form-group">
                                <h6 className='mt-2'><label htmlFor="offer">Offer</label></h6>
                                <input type="number" className="form-control" id="quantity" placeholder="Enter your offer in %" ref={offerRef} required />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;