import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Updated to use the axios instance
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [adminName, setAdminName] = useState('Admin');
    const [doctors, setDoctors] = useState([]);
    const [showDoctorList, setShowDoctorList] = useState(false);

    useEffect(() => {
        if (showDoctorList) {
            fetchDoctors();
        }
    }, [showDoctorList]);

    const fetchDoctors = async () => {
        try {
            const response = await api.get('/api/doctors'); // Using axios instance
            console.log('Fetched doctors:', response.data); // For debugging
            if (Array.isArray(response.data)) {
                setDoctors(response.data);
            } else {
                setDoctors([]); // Handle case where response is not an array
            }
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const toggleDoctorList = () => {
        setShowDoctorList(prevState => !prevState);
    };

    return (
        <div className="admin-dashboard-container">
            <header className="admin-dashboard-header">
                <h1>Welcome, {adminName}</h1>
            </header>

            <div className="admin-dashboard-buttons">
                <button
                    className="admin-dashboard-button"
                    onClick={() => navigate('/doctorForm')}
                >
                    Add Doctor
                </button>
                <button
                    className="admin-dashboard-button"
                    onClick={toggleDoctorList}
                >
                    {showDoctorList ? 'Hide Doctor List' : 'Show Doctor List'}
                </button>
            </div>

            {showDoctorList && (
                <div className="doctor-list-container">
                    <h2>Doctor List</h2>
                    <table className="doctor-list-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Specialization</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Clinic Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr key={doctor.doctorId} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{doctor.doctorId}</td>
                                    <td>{doctor.firstName}</td>
                                    <td>{doctor.lastName}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.contact}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.clinicAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
