const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Perform registration logic here (e.g., save to database)

    console.log(`Username: ${username}, Password: ${password}`);
    res.status(201).send('User registered successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
