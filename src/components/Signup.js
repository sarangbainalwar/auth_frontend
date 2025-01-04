import React, { useState } from 'react';
import './SignupPage.css'; // Import CSS for styling

const Signup = () => {
    // State to hold form input data
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState(''); // To store error or success messages

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle the signup submission
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/signup/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setMessage('Signup successful!');
            } else {
                setMessage('Signup failed: ' + (data.error || 'An error occurred'));
            }
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        }
    };
    
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2 className="signup-title">Create Your Account</h2>
                <form onSubmit={handleSignup} className="signup-form">
                    {/* Username Input */}
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>

                {/* Message Display */}
                {message && <p className="signup-message">{message}</p>}
            </div>
        </div>
    );
};

export default Signup;
