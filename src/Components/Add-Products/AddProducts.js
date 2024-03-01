import axios from 'axios';
import React, { useRef } from 'react';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;

        const newProduct = {
            name: name, 
            price: price, 
            quantity: quantity
        }

        axios.post('http://localhost:5000/products', newProduct)
        .then(res => {
            if(res.data.insertedId){
                alert('Alhamdulillah your product is successfully added');
                event.target.reset();
            }
        })
        
    }
    return (
        <div>
            <h2 className='mt-3'>Please Add Products</h2>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleAddProduct}>
                            <div className="form-group">
                                <label htmlFor="fullName">Product Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter product name" ref={nameRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Enter price" ref={priceRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Quantity</label>
                                <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" ref={quantityRef}/>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;