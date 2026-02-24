const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

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

app.listen(PORT, '127.0.0.1', () => {
    console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});
