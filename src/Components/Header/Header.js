import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-dark'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-75 mx-auto">
                <NavLink className="navbar-brand" to="/">Gadget-Monkey</NavLink>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add/products">Add-Products</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;