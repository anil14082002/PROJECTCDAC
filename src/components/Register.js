import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './RegisterPage.css'; // Import the CSS file

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state before making request

        try {
            // Send a POST request to the /register endpoint
            const response = await api.post('/api/register', {
                firstName,
                lastName,
                email,
                password,
            });

            console.log('Registration response:', response.data); // Debugging line

            // Check if registration was successful
            if (response.status === 201) {
                // Redirect to login page after successful registration
                navigate('/login');
            } else {
                // Display error message if registration fails
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            // More descriptive error handling
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred during registration. Please try again.');
            }
        }
    };

    return (
        <div className="register-page"> {/* Added a unique class name */}
            <h2 id='reg'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
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
                <button type="submit" className="register-button">Register</button>
            </form>
            <div className="login-redirect">
                <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
        </div>
    );
};

export default Register;
