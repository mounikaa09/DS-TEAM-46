// user.js
const { User } = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return 'User registered successfully!';
}

async function loginUser(username, password) {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
        return { token };
    } else {
        throw new Error('Invalid credentials');
    }
}

async function getAllUsers() {
    return await User.find();
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers
};
