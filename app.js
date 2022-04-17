const express = require("express")
const app = express()

var port = 3000;



app.listen((port), () => {
    console.log("Server running on URL: https://localhost:"${port});
})
