const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',          // ganti sesuai password MySQL-mu
  database: 'db_express_mysql'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = conn;
