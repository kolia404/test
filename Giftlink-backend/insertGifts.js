const connectToDatabase = require('./models/db');

async function insertGifts() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");

        // الـ 16 هدية المطلوبة (بيانات جاهزة)
        const gifts = [
            { id: "1", name: "Robot Toy", category: "Toys", condition: "New" },
            { id: "2", name: "Laptop", category: "Electronics", condition: "Used" },
            { id: "3", name: "Bicycle", category: "Sports", condition: "New" },
            { id: "4", name: "Coffee Maker", category: "Home", condition: "New" },
            { id: "5", name: "Headphones", category: "Electronics", condition: "New" },
            { id: "6", name: "Football", category: "Sports", condition: "Used" },
            { id: "7", name: "Story Book", category: "Education", condition: "New" },
            { id: "8", name: "Smart Watch", category: "Electronics", condition: "New" },
            { id: "9", name: "Kitchen Mixer", category: "Home", condition: "Used" },
            { id: "10", name: "Drawing Set", category: "Education", condition: "New" },
            { id: "11", name: "Teddy Bear", category: "Toys", condition: "New" },
            { id: "12", name: "Camera", category: "Electronics", condition: "Used" },
            { id: "13", name: "Tennis Racket", category: "Sports", condition: "New" },
            { id: "14", name: "Desk Lamp", category: "Home", condition: "New" },
            { id: "15", name: "Puzzle Game", category: "Toys", condition: "New" },
            { id: "16", name: "Backpack", category: "Fashion", condition: "Used" }
        ];

        // مسح القديم وإضافة الـ 16 هدية
        await collection.deleteMany({});
        const result = await collection.insertMany(gifts);
        
        console.log(`✅ Success! Inserted ${result.insertedCount} gifts into MongoDB.`);
        process.exit();
    } catch (error) {
        console.error("❌ Error inserting gifts:", error);
        process.exit(1);
    }
}

insertGifts();