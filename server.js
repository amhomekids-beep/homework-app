const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'MẬT_KHẨU',
  database: 'homework_app'
});

(async () => {
  const [rows] = await db.query('SELECT * FROM users');
  console.log(rows);
})();
