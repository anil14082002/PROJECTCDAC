// src/components/PatientLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../api/api';
import './PatientLogin.css';

const PatientLogin = () => {
    const [patientId, setPatientId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure this endpoint and payload match your backend API
            const response = await api.post('/patient/login', { patientId, password });

            if (response.status === 200 && response.data) {
                // Navigate to the patient dashboard with patient data
                navigate('/patientDashboard', { state: { patient: response.data } });
            } else {
                setErrorMessage('Invalid patient ID or password.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Error logging in. Please try again.');
        }
    };

    return (
        <div className="patient-login-container">
            <h2>Patient Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="patient-login-form-group">
                    <label>Patient ID:</label>
                    <input
                        type="text"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                    />
                </div>
                <div className="patient-login-form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="patient-login-error">{errorMessage}</p>}
                <button type="submit" className="patient-login-button">Login</button>
            </form>
            <p>Don't have an account? <a href="/patientForm">Register here</a></p>
        </div>
    );
};

export default PatientLogin;
