const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // {TODO: Add your MySQL password}
    password: process.env.SERVER_PASSWORD,
    database: 'warriorquest_db'
  },
  console.log(`Connected to the warriorquest_db database.`)
);

// Query database
// let deletedRow = 2;

// db.query(`DELETE FROM books WHERE id = ?`, deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Query database
db.query('SELECT * FROM user', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});