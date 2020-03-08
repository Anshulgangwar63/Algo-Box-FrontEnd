import React from 'react';
import '../../styles/main.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="logo">
                <p className="logo-text">Algo-Box</p>
            </div>
            <div className="nav-links-container">
                <Link to={'/'} className="nav-links">
                    <p >Problem</p>
                </Link>
                <Link to={'/'} className="nav-links">
                    <p>Contest</p>
                </Link>
                <Link to={'/'} className="nav-links">
                    <p>Editorial</p>
                </Link>
                 <Link to={'/'} className="nav-links">
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;