const router = require("express").Router();
// const { CRM } = require("../../models");

// router.get("/userData", (req, res) => {
//   const sql = "SELECT * FROM userData";

//   connection.query(sql, (err, result) => {
//     if (err) {
//       res.status(500).send({ error: "Error fetching users" });
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

// router.post("/userData", (req, res) => {
//   const userData = req.body;
//   const sql = "INSERT INTO userData SET ?";

//   connection.query(sql, userData, (err, result) => {
//     if (err) {
//       res.status(500).send({ error: "Error inserting user" });
//     } else {
//       res.status(200).send({ message: " successful" });
//     }
//   });
// });

module.exports = router;
