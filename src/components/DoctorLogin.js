import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './DoctorLogin.css';

const DoctorLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the login API
            const response = await api.post('/api/login', { email, password });
            
            if (response.status === 200) {
                // Login successful, navigate to the doctor dashboard
                navigate('/doctorDashboard');
            } else {
                // Handle login failure
                setErrorMessage('Incorrect email or password.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="doctor-login-container">
            <h2>Doctor Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="doctor-form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            
        </div>
    );
};

export default DoctorLogin;
