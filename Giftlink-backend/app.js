const express = require('express');
const app = express();
const cors = require('cors');
const connectToDatabase = require('./models/db');

const searchRoutes = require('./routes/searchRoutes');
const giftRoutes = require('./routes/giftRoutes');
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api/gifts', giftRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);

const PORT = 3060;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});