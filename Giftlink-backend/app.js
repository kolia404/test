const express = require('express');
const app = express();
const cors = require('cors');

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

app.listen(3060, () => {
  console.log('Server running on port 3060 🚀');
});