import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const userName = sessionStorage.getItem('name'); 

return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">GiftLink</Link>
                <div className="navbar-nav me-auto">
                    <Link className="nav-link" to="/app">Gifts</Link>
                    <Link className="nav-link" to="/search">Search</Link> 
                </div>
                <div className="navbar-nav ms-auto">
                    {userName ? (
                        <span className="nav-link text-info">Welcome, {userName}</span>
                    ) : (
                        <Link className="nav-link" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;