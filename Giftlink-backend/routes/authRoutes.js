router.post('/login', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const theUser = await collection.findOne({ email: req.body.email });
    
    if (theUser) {
        res.json({ message: "Success" });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});