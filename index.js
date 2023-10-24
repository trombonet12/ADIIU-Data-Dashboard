// Import required modules
const express = require('express');
const mysql = require('mysql');
const path = require('path');

// Create an instance of express
const app = express();

// Middlewares
app.use(express.json());

// Define the database connection details
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'steamdb'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Set up the server
app.listen('3000', () => {
    console.log('Server started on port 3000');
});

// Handle request for generos
app.get('/generos', (req, res) => {
    db.query(`
        SELECT genre, COUNT(*) AS count
        FROM (
            SELECT genre1 AS genre FROM applicationgenres
            UNION ALL
            SELECT genre2 AS genre FROM applicationgenres
            UNION ALL
            SELECT genre3 AS genre FROM applicationgenres
            UNION ALL
            SELECT genre4 AS genre FROM applicationgenres
            UNION ALL
            SELECT genre5 AS genre FROM applicationgenres
            UNION ALL
            SELECT genre6 AS genre FROM applicationgenres
        ) AS subquery
        WHERE genre IS NOT NULL
        GROUP BY genre
        ORDER BY count DESC;
    `, (err, results) => {
        if (err) {
            throw err;
        }

        // Transform the data into a format that can be used by Highcharts
        const data = results.map(result => ({
            name: result.genre,
            y: result.count
        }));

        // Send the data to the client
        res.json(data);
    });
});

// Handle request for desarrolladores
app.get('/desarrolladores', (req, res) => {
    db.query(`
    SELECT developer, COUNT(*) AS count
    FROM applicationdevelopers
    GROUP BY developer
    ORDER BY count DESC
    LIMIT 20;
    `,
        (err, results) => {
            if (err) {
                throw err;
            }

            // Transform the data into a format that can be used by Highcharts
            const data = results.map(result => ({
                name: result.developer,
                y: result.count
            }));

            // Send the data to the client
            res.json(data);
        });
});

app.use('/', express.static(path.join(__dirname, '')));
