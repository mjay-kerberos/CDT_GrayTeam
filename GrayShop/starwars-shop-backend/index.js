const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'grayShop', // Your PostgreSQL username
  host: 'localhost',
  database: 'Outpost', // Your PostgreSQL database name
  password: 'gray123$', // Your PostgreSQL password
  port: 5432,
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/products', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
