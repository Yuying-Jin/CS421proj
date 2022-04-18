//Import modules
const express = require("express")
var path = require('path');

//Set up Express
const app = express()

//Get port
const port = 3000;

//General path
app.use(express.static(__dirname + '/'));

//View engine and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Pages
var siteTitle = "Weldon's Projects";
    //Homepage
app.get("/",function(req, res) {
    console.log(`Respond status code: ${res.statusCode}`);
    console.log(`Current webpage: Home`);
    res.render("homepage",{Title: `Home | ${siteTitle}`});
});
    //Gallery
app.get("/gallery",function(req, res) {
    console.log(`Respond status code: ${res.statusCode}`);
    console.log(`Current webpage: Gallery`);
    res.render("gallery",{Title: `Gallery | ${siteTitle}`});
});
    //About Us
app.get("/aboutus",function(req, res) {
    console.log(`Respond status code: ${res.statusCode}`);
    console.log(`Current webpage: About Us`);
    res.render("aboutUs",{Title: `About Us | ${siteTitle}`});
});

//Re-directions
    //Homepage redirect 1
app.get("/home",function(req, res) {
    res.redirect('/');
});
    //Homepage redirect 2
app.get("/main",function(req, res) {
    res.redirect('/');
});
    //Homepage redirect 3
app.get("/index",function(req, res) {
    res.redirect('/');
});
    //About Us redirect 1
app.get("/about",function(req, res) {
    res.redirect('/aboutus');
});

//Error page
    //Error 404
///*
app.use(function (request, response, next) {
    response.status(404);

    console.log(`Respond status code: ${response.statusCode}`);
    if (request.accepts('html')) {
        response.render("errors/error", {
            Title:`Page not found | ${siteTitle}`,
            errorCode:`${response.statusCode}`,
            errorMsg_general: "There was a problem with server request.",
            errorMsg_specific: "Page not found."
        });
    }
});
//*/


//Get URL on app.js startup
app.listen((port), () => {
    console.log(`Server running on URL: http://localhost:${port}`);
})
