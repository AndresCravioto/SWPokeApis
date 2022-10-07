const app = require("./app");

//port at which the server will run
const port = 4000;

//start server and listen for the request
app.listen(port, () =>
    //a callback that will be called as soon as server start listening
    console.log(`server is listening at http://localhost:${port}`)
);