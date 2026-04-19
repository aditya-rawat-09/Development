const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  multipleStatements: true
});

const schema = fs.readFileSync('schema.sql', 'utf8');

connection.query(schema, (error, results) => {
  if (error) throw error;
  console.log('Schema created successfully!');
  connection.end();
});