// src/components/PatientDashboard.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api/api';
import './PatientDashboard.css'; // Ensure this line is correct

const PatientDashboard = () => {
    const location = useLocation();
    const patient = location.state?.patient; // Get patient data from navigation state

    const [healthCard, setHealthCard] = useState(null);

    useEffect(() => {
        if (patient && patient.patientId) {
            // Fetch health card details if patient ID is available
            api.get(`/patient/${patient.patientId}/card`)
                .then(response => {
                    setHealthCard(response.data);
                })
                .catch(error => {
                    console.error('Error fetching health card:', error);
                });
        }
    }, [patient]);

    return (
        <div className="patient-dashboard-container">
            <h1>Welcome, {patient ? `${patient.firstName} ${patient.lastName}` : 'Patient'}</h1>
            <div className="health-card-section">
                {healthCard ? (
                    <div className="health-card-info">
                        <h2>Your Health Card</h2>
                        <p><strong>Card ID:</strong> {healthCard.cardId}</p>
                        <p><strong>Card Type:</strong> {healthCard.cardType}</p>
                        <p><strong>Issued Date:</strong> {healthCard.issuedDate}</p>
                        <p><strong>Expiry Date:</strong> {healthCard.expiryDate}</p>
                        {/* Add other health card details here */}
                    </div>
                ) : (
                    <p>Loading your health card information...</p>
                )}
            </div>
        </div>
    );
};

export default PatientDashboard;
