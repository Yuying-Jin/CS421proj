// Importing the http module
const http = require("http")

// Determine port and host
const hostname = '127.0.0.1'
const port = 3000;

// Creating server
const server = http.createServer((req, res) => {

    // Get Data from Client
    req.on('data', chunk => {console.log("Got some data -->"+chunk)});
    res.statusCode = 200;

    // Sending the response
    res.write("Respond from server.")
    res.end();

})

// Server listening to port 3000
server.listen(port,hostname,()=> {
    console.log("Server running");
})