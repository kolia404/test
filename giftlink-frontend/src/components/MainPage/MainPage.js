import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // السطر ده كان ناقص

function MainPage() {
    const [gifts, setGifts] = useState([]);
    const navigate = useNavigate(); // السطر ده هو اللي هيحل الـ error

    useEffect(() => {
        // جلب الهدايا من الباك إند
        fetch('/api/gifts')
            .then(res => res.json())
            .then(data => setGifts(data))
            .catch(err => console.error("Error fetching gifts:", err));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Available Gifts</h2>
            <div className="row">
                {gifts.map(gift => (
                    <div className="col-md-4 mb-4" key={gift.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{gift.name}</h5>
                                <p className="card-text text-muted">{gift.category}</p>
                                <button 
                                    className="btn btn-outline-primary"
                                    onClick={() => navigate(`/gift/${gift.id}`)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;