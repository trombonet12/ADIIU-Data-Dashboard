// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create an instance of express
const app = express();

// Define the database connection details
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'steamdb'
});

// Connect to the database
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Set up the server
app.listen('3000', () => {
    console.log('Server started on port 3000');
});

// Route to serve inicio.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
