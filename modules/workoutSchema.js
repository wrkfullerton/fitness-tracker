const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [],
    date: Date,
    completed: {
        type: Boolean,
        default: false,
    },
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout; 

