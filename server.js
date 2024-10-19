const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Response } = require('./src/db');
const evaluateResponse = require('./src/evaluation');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// User registration
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered successfully!');
});

// User login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Evaluate response
app.post('/api/evaluate', async (req, res) => {
    const { username, response } = req.body;
    const evaluation = evaluateResponse(response);
    
    const userResponse = new Response({ username, response, evaluation });
    await userResponse.save();

    res.json(evaluation);
});

// Get all responses for admin
app.get('/api/responses', async (req, res) => {
    const responses = await Response.find();
    res.json(responses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
