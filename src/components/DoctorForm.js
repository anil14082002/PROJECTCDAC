// src/components/DoctorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importing axios directly (remove if you have an api instance setup)
import './DoctorForm.css'; // Importing the CSS

const DoctorForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [clinicAddress, setClinicAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // New state for password
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3003/api/doctors', {
                first_name: firstName,
                     last_name: lastName,
                specialization,
                contact,
                email,
                clinicAddress,
                password, 
            });
            navigate('/doctors'); // Redirect to doctor list after adding
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    return (
        <div className="doctor-form-container">
            <h2 className="doctor-form-heading">Doctor Registration</h2>
            <form className="doctor-form" onSubmit={handleSubmit}>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">First Name:</label>
                    <input 
                        className="doctor-input"
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">Last Name:</label>
                    <input 
                        className="doctor-input"
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">Email:</label>
                    <input 
                        className="doctor-input"
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">Password:</label> {/* New password field */}
                    <input 
                        className="doctor-input"
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">Specialization:</label>
                    <input 
                        className="doctor-input"
                        type="text" 
                        value={specialization} 
                        onChange={(e) => setSpecialization(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">Contact:</label>
                    <input 
                        className="doctor-input"
                        type="text" 
                        value={contact} 
                        onChange={(e) => setContact(e.target.value)} 
                        required 
                    />
                </div>
                <div className="doctor-form-group">
                    <label className="doctor-form-label">Clinic Address:</label>
                    <input 
                        className="doctor-input"
                        type="text" 
                        value={clinicAddress} 
                        onChange={(e) => setClinicAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="doctor-submit-button">Register</button>
            </form>
            <div className="doctor-form-footer">
               
            </div>
        </div>
    );
};

export default DoctorForm;
