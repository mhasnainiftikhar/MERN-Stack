const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcryptjs library
const User = require('./Models/user'); // Adjust the path as per your project structure

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://sp21bse014:N77OeSOIEsNKqdkk@cluster0.feaa1l9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Register endpoint
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if username already exists
        let existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password with salt factor of 10

        // Create a new user with hashed password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
