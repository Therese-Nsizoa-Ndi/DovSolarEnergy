require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:");
    console.error(err);
    return;
  }

  console.log("✅ Connected to MySQL!");
});

// Test route
app.get("/", (req, res) => {
  res.send("DovSolarEnergy API is running!");
});

app.post("/contact", (req, res) => {

  const {
    full_name,
    email,
    phone,
    subject,
    message
  } = req.body;

  const sql = `
    INSERT INTO contact_messages
    (full_name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [full_name, email, phone, subject, message],
    (err, result) => {

      if (err) {
        console.error(err);
        return res.status(500).json({
          message: "Database error"
        });
      }

      res.status(200).json({
        message: "Message sent successfully!"
      });

    }
  );

});

app.get("/messages", (req, res) => {

  const sql = `
    SELECT *
    FROM contact_messages
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json({
        message: "Database error"
      });
    }

    res.json(results);

  });

});

app.get("/dashboard", (req, res) => {

  const sql = `
    SELECT COUNT(*) AS totalMessages
    FROM contact_messages
  `;

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json({
        message: "Database error"
      });
    }

    res.json(results[0]);

  });

});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});

