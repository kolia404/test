import React, { useState } from 'react';

function SearchPage() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        // بناء الرابط ليشمل الاسم والفئة
        const response = await fetch(`/api/search?name=${name}&category=${category}`);
        const data = await response.json();
        setResults(data);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Search for Gifts</h2>
            <div className="row mb-4">
                {/* خانة البحث بالاسم */}
                <div className="col-md-5">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search by name..." 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* اختيار الفئة */}
                <div className="col-md-4">
                    <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Toys">Toys</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home">Home</option>
                        <option value="Sports">Sports</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary w-100" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <hr />

            <div className="row mt-4">
                {results.length > 0 ? (
                    results.map(gift => (
                        <div className="col-md-4 mb-3" key={gift.id}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{gift.name}</h5>
                                    <p className="badge bg-info text-dark">{gift.category}</p>
                                    <p className="card-text text-muted">Condition: {gift.condition}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center text-muted">
                        <p>No gifts found. Try changing your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;