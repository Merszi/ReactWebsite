const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Specify the allowed origin (replace this with your frontend URL)
const allowedOrigin = 'http://localhost:3000';

// Use cors middleware with specific origin
app.use(
  cors({
    origin: allowedOrigin,
    methods: 'POST', // Specify the allowed HTTP methods
  })
);
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactsite',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'User signed up successfully', userId: results.insertId });
    }
  });
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication (check if the username and password match a record in your database)
  // For simplicity, you can use a placeholder query here. Make sure to use parameterized queries in production.
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        // Authentication successful
        res.json({ success: true, message: 'Login successful' });
      } else {
        // Authentication failed
        res.json({ success: false, message: 'Invalid credentials' });
      }
    }
  });
});
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  const newContact = {
    name,
    email,
    message,
  };

  contactData.push(newContact);

  console.log('Contact form submitted:', newContact);

  // Send a response
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
