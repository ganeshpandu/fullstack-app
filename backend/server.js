const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
