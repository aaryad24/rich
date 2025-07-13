require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const historyRoutes = require('./routes/history');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('server is live'));
app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Initialize default users
async function initializeUsers() {
  const User = require('./models/User');
  const count = await User.countDocuments();
  if (count === 0) {
    const defaultUsers = [
      'Rahul', 'Kamal', 'Sanak', 'Priya', 'Amit',
      'Neha', 'Vikram', 'Sonia', 'Raj', 'Anjali'
    ];
    await User.insertMany(defaultUsers.map(name => ({ name })));
    console.log('Initialized default users');
  }
}

const port = 5000;
app.listen(port, () => console.log(`server is running on the port ${port}`));