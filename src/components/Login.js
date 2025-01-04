import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', 
                { username, password }
            );
            localStorage.setItem('token', response.data.token);
            alert("Login successful!");
            navigate('/dashboard');
        } catch (error) {
            alert("Login failed. Check your credentials.");
        }
    };
    
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Welcome Back!</h2>
                <form onSubmit={handleLogin} className="login-form">
                    {/* Username Field */}
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                        required
                    />

                    {/* Password Field */}
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                        required
                    />

                    {/* Submit Button */}
                    <button type="submit" className="login-button">Login</button>
                </form>

                {/* Sign Up Redirect */}
                <p className="signup-redirect">
                    Don't have an account? 
                    <a href="/signup" className="signup-link"> Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
