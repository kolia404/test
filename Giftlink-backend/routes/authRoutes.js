const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const bcrypt = require('bcryptjs'); 

router.post('/register', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("users");

        const existingUser = await collection.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password, 
            createdAt: new Date()
        };

        await collection.insertOne(newUser);
        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("users");

        const theUser = await collection.findOne({ email: req.body.email });

        if (theUser && theUser.password === req.body.password) {
            res.status(200).json({ 
                message: "Login successful", 
                userName: theUser.firstName,
                token: "mock-jwt-token" 
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (e) {
        res.status(500).json({ error: "Login failed" });
    }
});

module.exports = router;