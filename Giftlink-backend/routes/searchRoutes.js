const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");

        let query = {};
        if (req.query.category) {
            query.category = req.query.category;
        }
        
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: "i" };
        }

        const gifts = await collection.find(query).toArray();
        res.status(200).json(gifts);
    } catch (e) {
        res.status(500).send("Error during search");
    }
});

module.exports = router;