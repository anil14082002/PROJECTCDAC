import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Adjust the path as necessary
import './HealthDetails.css';

const HealthDetails = () => {
    const [card, setCard] = useState({
        disease: '',
        suggestion: '',
        visitDate: '',
        medicine: '',
        doctorName: '',
        weight: '',
        bloodPressure: '',
        patient: { patientId: '' },
    });

    const [patientId, setPatientId] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await api.get('/currentDoctor');
                setCard((card) => ({ ...card, doctorName: response.data.name }));
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };
        fetchDoctorData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'patientId') {
            setCard((prevCard) => ({ ...prevCard, patient: { patientId: value } }));
        } else {
            setCard((prevCard) => ({ ...prevCard, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/cards', card);
            if (response.status === 201) {
                setMessage('Patient added successfully!');
                setTimeout(() => {
                    navigate('/doctorDashboard');
                }, 2000); // Redirect after 2 seconds to show the message
            }
        } catch (error) {
            console.error('Error submitting card details:', error);
            setMessage('Failed to submit card details. Please try again.');
        }
    };

    return (
        <div className="health-details-container">
            <h1>Health Details</h1>
            <form onSubmit={handleSubmit}>
                <table className="health-details-form-table">
                    <tbody>
                        <tr>
                            <td>Disease:</td>
                            <td>
                                <input
                                    type="text"
                                    name="disease"
                                    value={card.disease}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Suggestion:</td>
                            <td>
                                <input
                                    type="text"
                                    name="suggestion"
                                    value={card.suggestion}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Visit Date:</td>
                            <td>
                                <input
                                    type="date"
                                    name="visitDate"
                                    value={card.visitDate}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Medicine:</td>
                            <td>
                                <input
                                    type="text"
                                    name="medicine"
                                    value={card.medicine}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Doctor Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="doctorName"
                                    value={card.doctorName}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Weight:</td>
                            <td>
                                <input
                                    type="number"
                                    name="weight"
                                    value={card.weight}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Blood Pressure:</td>
                            <td>
                                <input
                                    type="number"
                                    name="bloodPressure"
                                    value={card.bloodPressure}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Patient ID:</td>
                            <td>
                                <input
                                    type="number"
                                    name="patientId"
                                    value={card.patient.patientId}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
                {message && <p className="success-message">{message}</p>}
            </form>
        </div>
    );
};

export default HealthDetails;
