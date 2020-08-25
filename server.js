const express = require('express');
require('./db/mongoose');

const PORT = process.env.PORT || 8080; 

const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//Routes 
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})