const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password along with the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plain text password with the hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);
