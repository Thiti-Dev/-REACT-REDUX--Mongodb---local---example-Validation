const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user Schema
const TestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('test', TestSchema);