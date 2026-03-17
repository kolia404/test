import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    // جلب الاسم المخزن (الذي جاء أصلاً من الداتا بيز عند الدخول)
    const userName = sessionStorage.getItem('name'); 

    const handleLogout = () => {
        sessionStorage.clear(); // مسح كل البيانات (الاسم والتوكن)
        navigate('/login'); // العودة لصفحة الدخول
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">GiftLink</Link>
                <div className="navbar-nav me-auto">
                    <Link className="nav-link" to="/app">Gifts</Link>
                    <Link className="nav-link" to="/search">Search</Link> 
                </div>
                <div className="navbar-nav ms-auto">
                    {/* الشرط: لو فيه اسم مخزن (يعني مسجل دخول) اعرض الترحيب وزر الخروج */}
                    {userName ? (
                        <>
                            <span className="nav-link text-info">Welcome, {userName}</span>
                            <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        // لو مفيش اسم (غير مسجل) اعرض زرار اللوجن
                        <Link className="nav-link" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;