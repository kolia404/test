import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="text-center p-5 shadow bg-white rounded">
                <h1 className="display-3 text-primary mb-4">Welcome to GiftLink</h1>
                <p className="lead mb-5">Share the joy, give a gift, and make someone's day special.</p>
                <button 
                    className="btn btn-primary btn-lg px-5" 
                    onClick={() => navigate('/login')}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default LandingPage;