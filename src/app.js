const express = require("express");
//create express app
const app = express();
const router = require("./routes/router");
app.use("/apis", router);
//create end point
app.get("/", async (request, response) => {
    //send 'Hi, from Node server' to client
    response.send("Hello, World!")
});


module.exports = app;
