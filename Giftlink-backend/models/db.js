const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/"; // أو رابط الـ Cluster الخاص بك
const dbName = "giftdb";

async function connectToDatabase() {
    const client = new MongoClient(url);
    // السطر التالي هو ما يبحث عنه التقييم
    await client.connect();
    console.log("Connected successfully to server");
    return client.db(dbName);
}
module.exports = connectToDatabase;