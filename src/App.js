import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import DoctorLogin from './components/DoctorLogin';
import DoctorForm from './components/DoctorForm';
import PatientForm from './components/PatientForm';
import PatientLogin from './components/PatientLogin';
import AdminDashboard from './components/AdminDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import HealthDetails from './components/HealthDetails';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/doctorLogin" element={<DoctorLogin />} />
                <Route path="/doctorForm" element={<DoctorForm />} />
                <Route path="/patientLogin" element={<PatientLogin />} />
                <Route path="/patientForm" element={<PatientForm />} />
               
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/doctorDashboard" element={<DoctorDashboard />} />
                <Route path="/patientDashboard" element={<PatientDashboard />} />
                <Route path="/healthDetails" element={<HealthDetails />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
