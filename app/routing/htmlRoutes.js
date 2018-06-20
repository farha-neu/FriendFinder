module.exports = (function() {
    'use strict';
    var externalRoutes = require('express').Router();
    var path = require("path");
    
    externalRoutes.get('/', function (req, res) {
         res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    externalRoutes.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    return externalRoutes;
})();


// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.