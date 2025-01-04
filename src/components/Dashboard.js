import React from 'react';
import './DashboardPage.css';  // Import the CSS file for styling

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h2 className="welcome-text">Welcome to Your Dashboard</h2>
                
                <div className="card">
                    <h3 className="card-title">Your Profile</h3>
                    <p className="card-description">View and update your personal information</p>
                    <button className="card-button">Go to Profile</button>
                </div>

                <div className="card">
                    <h3 className="card-title">Settings</h3>
                    <p className="card-description">Manage your account settings</p>
                    <button className="card-button">Go to Settings</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
