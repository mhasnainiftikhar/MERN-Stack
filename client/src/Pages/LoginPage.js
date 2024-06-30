import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setMessage('Login successful');
                navigate('/'); // Redirect to home page on successful login
            } else {
                const errorText = await response.text();
                setMessage(`Error logging in: ${errorText}`);
            }
        } catch (error) {
            setMessage('Failed to fetch: ' + error.message);
        }
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
}
