// dataset.js
const { Response } = require('./db');

const sampleResponses = [
    {
        username: 'student1',
        response: 'This is a sample response demonstrating good practices in writing.',
        evaluation: {
            accuracy: 90,
            plagiarism: 5,
            grammar: 95,
            coherence: 85,
            relevance: 80,
            sentiment: 10,
            finalScore: 85
        }
    },
    {
        username: 'student2',
        response: 'Another response that might lack clarity but has good content.',
        evaluation: {
            accuracy: 75,
            plagiarism: 10,
            grammar: 80,
            coherence: 70,
            relevance: 75,
            sentiment: -5,
            finalScore: 70
        }
    },
    // Add more sample responses as needed
];

async function seedResponses() {
    await Response.deleteMany({}); // Clear existing responses
    await Response.insertMany(sampleResponses);
    console.log('Sample responses seeded!');
}

module.exports = { seedResponses };
