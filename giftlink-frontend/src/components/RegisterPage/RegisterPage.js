import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) navigate('/login');
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input className="form-control mb-2" type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
                <input className="form-control mb-2" type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
                <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;