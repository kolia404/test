import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginPage() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('auth-token', data.token);
                sessionStorage.setItem('name', data.userName); 
                
                Swal.fire({
                    title: `Welcome back, ${data.userName}!`,
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    navigate('/');
                });
            } else {
                Swal.fire({
                    title: 'Oops!',
                    text: 'Invalid email or password',
                    icon: 'error'
                });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 border p-4 rounded shadow">
                    <h2 className="mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
                        <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
                        <button className="btn btn-success w-100 mb-3" type="submit">Login</button>
                    </form>
                    <div className="text-center">
                        <p>Don't have an account? 
                            <button className="btn btn-link" onClick={() => navigate('/register')}>Register here</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;