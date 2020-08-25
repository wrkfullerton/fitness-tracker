const mongoose = require("mongoose");

const databaseUrl = 'workout';

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${databaseUrl}`, { useNewUrlParser: true });