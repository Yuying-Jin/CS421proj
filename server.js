// Importing http module
const http = require("http")

// Determine port and host
const hostname = '127.0.0.1'
const port = 3000;

// Creating server
const server = http.createServer((req, res) => {

    // Get data from client
    req.on('data', chunk => {console.log("Got some data -->"+chunk)});
    res.statusCode = 200;

    // Sending response
    res.write("Respond from server.")
    res.end();

})

// Check if server is listening to port
server.listen(port,hostname,()=> {
    console.log("Server running");
})