import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setProducts(response.data)
            })
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete this item?');
        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`;
            axios.delete(url)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        alert('Item is deleted successfully.');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }
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
                            <th>Offer</th>
                            <th>Neat Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.offer}%</td>
                            <td>{product.price - (product.price * product.offer / 100)}</td>
                            <td className='px-0 w-25'>
                                <NavLink to={`/update/products/${product._id}`}><button className="btn btn-success">Update</button></NavLink>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger ms-2">X</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;