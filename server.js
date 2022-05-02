

// Importing http module //Contributor: Jiayuan Wen
const http = require("http")

// Determine port and host //Contributor: Jiayuan Wen
const hostname = '127.0.0.1'
const port = 3000;

// Creating server //Contributor: Jiayuan Wen
const server = http.createServer((req, res) => {

    // Get data from client
    req.on('data', chunk => {console.log("Got some data -->"+chunk)});
    res.statusCode = 200;

    // Sending response
    res.write("Respond from server.")
    res.end();

})

// Check if server is listening to port //Contributor: Jiayuan Wen
server.listen(port,hostname,()=> {
    console.log("Server running");
})