var express = require("express");
var app = express();
var ip = require('ip')

app.listen(80, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    response = {'response':'Yeah','ip':ip.address()};
    res.json(response);
});