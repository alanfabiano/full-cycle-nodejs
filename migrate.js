const mysql = require('mysql')
const config = require('./config.js')

const connection = mysql.createConnection(config.database)

connection.query(`CREATE TABLE IF NOT EXISTS people(id int NOT NULL auto_increment, name VARCHAR(255), PRIMARY KEY(id))`)
connection.end()