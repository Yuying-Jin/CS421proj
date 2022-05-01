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

    //Project page
app.get("/project", function (req,res){
    console.log(`Respond status code: ${res.statusCode}`);

    //id determines the content to be shown in item entry
    var ProjID = req.query.id;
    switch (ProjID) {
        case 'Classic-White-Audiosurf-2':
            var itemName = 'Classic White (Audiosurf 2)';
            var type = 'Skin';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Star-Rider-Audiosurf-2':
            var itemName = 'Star Rider (Audiosurf 2)';
            var type = 'Skin';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Sore-Ga-Daijin-Beat-Saber':
            var itemName = 'Sore Ga Daijin それが大事 (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Eurodancer-Beat-Saber':
            var itemName = 'Eurodancer (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Half-Life-Theme-Beat-Saber':
            var itemName = 'Half-Life End Credits Theme (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Ho-Ho-Ho-Beat-Saber':
            var itemName = 'Ho Ho Ho (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Spectre-Beat-Saber':
            var itemName = 'Spectre (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Spectre-(Old)-Beat-Saber':
            var itemName = 'Spectre[Old] (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Kokoro-Beat-Saber':
            var itemName = 'Kokoro ココロ (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        case 'Summer-Vibes-Beat-Saber':
            var itemName = 'Summer Vibes (Beat Saber)';
            var type = 'Level';
            var desc = 'This is the description for Classic White Audiosurf 2.';
            break;
        default:
            res.redirect('/gallery'); //Redirect to gallery in case of non-existent entry
            break;
    }

    console.log(`Current webpage: Project page: ${itemName}`);

    res.render("entry",{Title: `Project | ${siteTitle}`,
        itemName: itemName,
        type: type,
        desc: desc
    });
});

//Re directions
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
    //About Us redirect 2
app.get("/us",function(req, res) {
    res.redirect('/aboutus');
});
    //Gallery redirect 1
app.get("/list",function(req, res) {
    res.redirect('/gallery');
});
    //Gallery redirect 2
app.get("/projectlist",function(req, res) {
    res.redirect('/gallery');
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


//Get URL on app startup
app.listen((port), () => {
    console.log(`Server running on URL: http://localhost:${port}`);
})
