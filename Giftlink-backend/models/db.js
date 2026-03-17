const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/"; 
const dbName = "giftdb";

async function connectToDatabase() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        return client.db(dbName);
    } catch (error) {
        console.error("Database connection failed", error);
        throw error;
    }
}

module.exports = connectToDatabase;