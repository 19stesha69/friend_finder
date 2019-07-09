var path = require('path');

//Pass the parameter "app" (express) in the export
module.exports = function(app) {

    //When "/survey" is hit, the file survey.html is delivered
    app.get("/survey", function(req, res) {
        res.sendFile(path.join (__dirname + "/../public/survey.html"));
    });

    //When a user is not on a pre-defined URL, they should be taken to the home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}