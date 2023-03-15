// const router = require('express').Router();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: ''
//   });

// router.get('/users', (req, res) => {
//     const sql = 'SELECT * FROM users';
  
//     connection.query(sql, (err, result) => {
//       if (err) {
//         res.status(500).send({ error: 'Error fetching users' });
//       } else {
//         res.status(200).send(result);
//       }
//     });
//   });

//   router.post('/users', (req, res) => {
//     const userData = req.body;
//     const sql = 'INSERT INTO users SET ?';
  
//     connection.query(sql, userData, (err, result) => {
//       if (err) {
//         res.status(500).send({ error: 'Error inserting user' });
//       } else {
//         res.status(200).send({ message: ' successful' });
//       }
//     });
//   });

//   module.exports = router;
