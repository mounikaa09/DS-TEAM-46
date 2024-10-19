const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/evaluationDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const responseSchema = new mongoose.Schema({
    username: { type: String, required: true },
    response: { type: String, required: true },
    evaluation: { type: Object, required: true },
});

const User = mongoose.model('User', userSchema);
const Response = mongoose.model('Response', responseSchema);

module.exports = { User, Response };
