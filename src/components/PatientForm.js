// src/components/PatientForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './PatientForm.css'; // Ensure this line is correct

const PatientForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [password, setPassword] = useState(''); // New state for password
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/patient', {
                firstName,
                lastName,
                dob,
                gender,
                contactNumber,
                bloodGroup,
                password, // Include password in the request
            });
            console.log(response.data);
            navigate('/patientLogin');
        } catch (error) {
            console.error('Registration failed:', error);
            setErrorMessage('Error registering. Please try again.');
        }
    };

    return (
        <div className="patient-register-container">
            <h2>Patient Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="patient-register-form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="patient-register-form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="patient-register-form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <div className="patient-register-form-group">
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="patient-register-form-group">
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="patient-register-form-group">
                    <label>Blood Group:</label>
                    <input
                        type="text"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    />
                </div>
                <div className="patient-register-form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="patient-register-error">{errorMessage}</p>}
                <button type="submit" className="patient-register-button">Register</button>
            </form>
            <p>Already have an account? <a href="/patientLogin">Login here</a></p>
        </div>
    );
};

export default PatientForm;
    