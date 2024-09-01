// src/components/DoctorDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Adjust the path as necessary
import './DoctorDashboard.css';

const DoctorDashboard = () => {
    const navigate = useNavigate();
    const [doctorName, setDoctorName] = useState('doctor'); // Placeholder value

    useEffect(() => {
        // Fetch doctor name or other data here if needed
        const fetchDoctorData = async () => {
            try {
                const response = await api.get('/doctors'); 
                setDoctorName(response.data.name);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };
        fetchDoctorData();
    }, []);

    return (
        <div className="doctor-dashboard-container">
            <header className="doctor-dashboard-header">
                <h1>Welcome, Dr. {doctorName}</h1>
            </header>
            <div className="doctor-dashboard-actions">
                <button 
                    className="health-details-button"
                    onClick={() => navigate('/healthDetails')}
                >
                    Add Patient Details
                </button>
            </div>
        </div>
    );
};

export default DoctorDashboard;
