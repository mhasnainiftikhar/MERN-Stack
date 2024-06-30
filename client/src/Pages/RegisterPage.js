import React, { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setMessage('User registered successfully');
            } else {
                const errorText = await response.text();
                setMessage(`Error registering user: ${errorText}`);
            }
        } catch (error) {
            setMessage('Failed to fetch: ' + error.message);
        }
    };

    return (
        <form className="register" onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
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
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
}
