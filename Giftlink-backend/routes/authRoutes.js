const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.post('/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("users");
        
        const theUser = await collection.findOne({ email: req.body.email });

        if (theUser && theUser.password === req.body.password) {
            res.status(200).json({ message: "Login successful", userName: theUser.firstName });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (e) {
        res.status(500).send("Login error");
    }
});

module.exports = router;