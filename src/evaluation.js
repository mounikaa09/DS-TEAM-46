const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

function evaluateResponse(response) {
    const tokens = tokenizer.tokenize(response);
    const sentimentScore = sentiment.analyze(response).score;

    // Simulated evaluation metrics
    const evaluation = {
        accuracy: Math.random() * 100,
        plagiarism: Math.random() * 30,
        grammar: Math.random() * 100,
        coherence: Math.random() * 100,
        relevance: Math.random() * 100,
        sentiment: sentimentScore,
        finalScore: ((Math.random() * 100) + sentimentScore) / 2
    };

    return { tokens, sentiment: sentimentScore, evaluation };
}

module.exports = evaluateResponse;
