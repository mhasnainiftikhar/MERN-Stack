import React, { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                console.log('User registered successfully');
                // Optionally, you can reset the form here
                setUsername('');
                setPassword('');
            } else {
                console.error('Error registering user:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to fetch:', error);
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
        </form>
    );
}
