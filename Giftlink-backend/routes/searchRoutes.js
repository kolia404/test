const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection("gifts");
    
    let query = {};
    if (req.query.category) {
        query.category = req.query.category;
    }

    const gifts = await collection.find(query).toArray();
    res.json(gifts);
});

module.exports = router;
