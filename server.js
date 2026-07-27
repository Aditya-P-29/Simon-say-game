import express from "express"; 
import binarySearch from "./binary-search.js"; 

const port = 8000; 
const app = express(); 

app.listen(port, () => { 
    console.log(`Server is listening on port: ${port}`); 
}); 

app.get("/home", async (req, res) => { 
    res.json({ message: "I am root!" }); 
}); 

// Fix 1: Use colon syntax for route parameters
app.get("/binary-search/:arr/:key", async (req, res) => { 
    const { arr, key } = req.params; 

    // Fix 2: Convert comma-separated string "1,2,3" into an array of integers
    const parsedArray = arr.split(',').map(Number);
    const parsedKey = parseInt(key, 10);

    res.json({ 
        ans: binarySearch(parsedArray, parsedKey) 
    }); 
});
