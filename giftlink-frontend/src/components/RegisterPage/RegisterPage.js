import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

function RegisterPage() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your account has been created.',
                    icon: 'success',
                    confirmButtonText: 'Go to Login'
                }).then(() => {
                    navigate('/login');
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Registration failed. Try again.',
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
                    <h2 className="mb-4">Register for GiftLink</h2>
                    <form onSubmit={handleRegister}>
                        <input className="form-control mb-2" type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
                        <input className="form-control mb-2" type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
                        <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                        <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                        <button className="btn btn-primary w-100 mb-3" type="submit">Register</button>
                    </form>
                    <div className="text-center">
                        <p>Already have an account? 
                            <button className="btn btn-link" onClick={() => navigate('/login')}>Login here</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;