const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// API Route to read from the JSON file
app.get('/api/drivers', (req, res) => {
    // path.join combines your folder path with the filename
    const filePath = path.join(__dirname, 'drivers.json');
    
    // fs.readFile physically opens and reads the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Could not read driver data" });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is live on port ${PORT}`);
});