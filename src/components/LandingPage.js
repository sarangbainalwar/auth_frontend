// components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to Our Customer Relationship Manager</h1>
            <p className="landing-subtitle">Join us and explore the experience!</p>
            <div className="button-container">
                <Link to="/signup"><button className="cta-button">Sign Up</button></Link>
                <Link to="/login"><button className="cta-button secondary">Login</button></Link>
            </div>
        </div>
    );
};

export default LandingPage;
