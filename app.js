

//Import modules //Contributor: Jiayuan Wen
const express = require("express")
var path = require('path');
const myMod = require("./itemDescriptions/itemDescriptions");

//Set up Express //Contributor: Jiayuan Wen
const app = express()

//Get port //Contributor: Jiayuan Wen
const port = 3000;

//General path //Contributor: Jiayuan Wen
app.use(express.static(__dirname + '/'));

//View engine and path //Contributor: Jiayuan Wen
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Pages
var siteTitle = "Weldon's Projects"; //Contributor: Jiayuan Wen
    //Homepage //Contributor: Jiayuan Wen
app.get("/",function(req, res) {
    console.log(`Respond status code: ${res.statusCode}`);
    console.log(`Current webpage: Home`);
    res.render("homepage",{Title: `Home | ${siteTitle}`});
});
    //Gallery //Contributor: Jiayuan Wen
app.get("/gallery",function(req, res) {
    console.log(`Respond status code: ${res.statusCode}`);
    console.log(`Current webpage: Gallery`);
    res.render("gallery",{Title: `Gallery | ${siteTitle}`});
});
    //About Us //Contributor: Jiayuan Wen
app.get("/aboutus",function(req, res) {
    console.log(`Respond status code: ${res.statusCode}`);
    console.log(`Current webpage: About Us`);
    res.render("aboutUs",{Title: `About Us | ${siteTitle}`});
});

    //Project page //Contributor: Jiayuan Wen
app.get("/project", function (req,res){
    console.log(`Respond status code: ${res.statusCode}`);

    //Import project descriptions from itemDescriptions.js
    const description = require("./itemDescriptions/itemDescriptions")

    //id determines the content to be shown in item entry
    var ProjID = req.query.id;

    switch (ProjID) {
        case 'Classic-White-Audiosurf-2':
            var itemName = 'Classic White (Audiosurf 2)';
            var type = 'Skin';
            var desc = description.classicWhite_AS2;
            break;
        case 'Star-Rider-Audiosurf-2':
            var itemName = 'Star Rider (Audiosurf 2)';
            var type = 'Skin';
            var desc = description.starRider_AS2;
            break;
        case 'Sore-Ga-Daijin-Beat-Saber':
            var itemName = 'Sore Ga Daijin それが大事 (Beat Saber)';
            var type = 'Level';
            var desc = description.soreGaDaijin_BS;
            break;
        case 'Eurodancer-Beat-Saber':
            var itemName = 'Eurodancer (Beat Saber)';
            var type = 'Level';
            var desc = description.eurodancer_BS;
            break;
        case 'Half-Life-Theme-Beat-Saber':
            var itemName = 'Half-Life End Credits Theme (Beat Saber)';
            var type = 'Level';
            var desc = description.halfLifeTheme_BS;
            break;
        case 'Ho-Ho-Ho-Beat-Saber':
            var itemName = 'Ho Ho Ho (Beat Saber)';
            var type = 'Level';
            var desc = description.hoHoHo_BS;
            break;
        case 'Spectre-Beat-Saber':
            var itemName = 'Spectre (Beat Saber)';
            var type = 'Level';
            var desc = description.spectre_BS;
            break;
        case 'Spectre-(Old)-Beat-Saber':
            var itemName = 'Spectre[Old] (Beat Saber)';
            var type = 'Level';
            var desc = description.spectreOld_BS;
            break;
        case 'Kokoro-Beat-Saber':
            var itemName = 'Kokoro ココロ (Beat Saber)';
            var type = 'Level';
            var desc = description.kokoro_BS;
            break;
        case 'Summer-Vibes-Beat-Saber':
            var itemName = 'Summer Vibes (Beat Saber)';
            var type = 'Level';
            var desc = description.summerVibe_BS;
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

//Re directions //Contributor: Jiayuan Wen
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

//Error page //Contributor: Jiayuan Wen
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


//Get URL on app startup //Contributor: Jiayuan Wen
app.listen((port), () => {
    console.log(`Server running on URL: http://localhost:${port}`);
})
