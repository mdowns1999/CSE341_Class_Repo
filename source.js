#!javascript
const express = require('express');

//Create the Express Object
const app = express();

app.get("/",(req, res) => {
    res.send("Mike Downs");
});

//Make the Port listen to 3000
app.listen(8000,() => 
{
    console.log("Server is Running on Port 8000!")
})
