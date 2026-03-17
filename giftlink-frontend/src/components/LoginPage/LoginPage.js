import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
            },
            body: JSON.stringify(credentials)
        });
        if (response.ok) navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
                <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
                <button className="btn btn-success" type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;