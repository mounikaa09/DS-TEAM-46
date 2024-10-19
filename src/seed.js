const mongoose = require('mongoose');
const { Response } = require('./db');

mongoose.connect('mongodb://localhost:27017/evaluationDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedResponses = async () => {
    const responses = [
        {
            username: 'student1',
            response: 'This is a sample response.',
            evaluation: { accuracy: 85, plagiarism: 5, grammar: 90, coherence: 80, relevance: 75, sentiment: 10, finalScore: 80 },
        },
        // Add more sample responses
    ];

    await Response.insertMany(responses);
    console.log('Database seeded!');
    mongoose.connection.close();
};

seedResponses();
