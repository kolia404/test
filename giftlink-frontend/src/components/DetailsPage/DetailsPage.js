import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailsPage() {
    const { id } = useParams();
    const [gift, setGift] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/gifts/${id}`)
            .then(res => res.json())
            .then(data => setGift(data))
            .catch(err => console.error("Error:", err));
    }, [id]);

    if (!gift) return <div className="container mt-5">Loading...</div>;

    return (
        <div className="container mt-5">
            <button className="btn btn-secondary mb-3" onClick={() => navigate('/app')}>Back to Gifts</button>
            <div className="row border p-4 rounded shadow">
                <div className="col-md-6 text-center">
                    <div className="bg-light p-5 rounded" style={{fontSize: '100px'}}>🎁</div>
                </div>
                <div className="col-md-6">
                    <h2 className="display-4">{gift.name}</h2>
                    <p className="badge bg-primary fs-5">{gift.category}</p>
                    <hr />
                    <h4>Condition: <span className="text-muted">{gift.condition}</span></h4>
                    <p className="mt-3 fs-5">This is a detailed description of the {gift.name}. It's a great choice for donation!</p>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;