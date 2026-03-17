const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    const db = await connectToDatabase(); 
    const collection = db.collection("gifts");
    const gifts = await collection.find({}).toArray();
    res.json(gifts);
});

router.get('/:id', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection("gifts");
    const gift = await collection.findOne({ id: req.params.id });
    res.json(gift);
});

module.exports = router;