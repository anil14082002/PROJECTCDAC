import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; 
import './LoginPage.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message on submit

        try {
            // Make a POST request to the /admins/login endpoint
            const response = await api.post('/admins/login', { email, password });

            console.log("Response received: ", response); // Debugging line

            // Check if login was successful
            if (response.status === 200 && response.data.token) {
                // Store the email and token (avoid storing passwords)
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("token", response.data.token);

                // Navigate to the admin dashboard on successful login
                navigate("/adminDashboard");
            } else {
                // Display error message from API response
                setError(response.data.message || 'Incorrect email or password. Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);

            // More descriptive error handling
            if (error.response) {
                console.error('Error response:', error.response);
                setError(error.response.data.message || 'An error occurred during login. Please try again.');
            } else if (error.request) {
                console.error('Error request:', error.request);
                setError('No response from the server. Please check your network connection.');
            } else {
                console.error('Error message:', error.message);
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <div className="error-message">{error}</div>} {/* Display error message */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
