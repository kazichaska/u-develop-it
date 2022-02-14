const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL username
        user: 'root',
        // MYSQL password
        password: 'mysqldb!',
        database: 'election'
    },
    console.log('Connected to the electiion Database')
);

module.exports = db;