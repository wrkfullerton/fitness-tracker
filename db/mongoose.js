const mongoose = require('mongoose');

const databaseURL = 'workout';

mongoose.connect(process.env.MONGODB_URI || `mongodb://{MONGO_URI}/${databaseURL}`, { useNewUrlParser: true });