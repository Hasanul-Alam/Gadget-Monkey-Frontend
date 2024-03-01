import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
        .then( (response) => {
            setProducts(response.data)
          })
    }, []);
    return (
        <div>
            <h1>Total Products: {products.length}</h1>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td className='px-0 w-25'>
                                <button className="btn btn-success">Update</button>
                                <button className="btn btn-danger ms-2">X</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;