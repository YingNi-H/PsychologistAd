// The express package contains Express, and its own required dependencies. It needs to be
// installed using npm.
const express = require("express");
const app = express();
const port = 3000;

// Setup Handlebars, this time with the default Layout being "main". This corresponds to a file
// called main.handlebars, inside the /views/layouts folder.
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Setup static routing. Any file located in the "public" folder
// will be able to be accessed by clients directly.
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// When a GET request is made to "/" (i.e. the root path), render the
// "home" view. This can be found in /views/home.handlebars
app.get("/", function (req, res) {
    //locals before render to take effect
    //res.locals.homePage = true;

    res.render("home");
    
    
});
app.get("/counselling", function (req, res) {
    res.render("counselling");
    
    
});
app.get("/counselling_mandarin", function (req, res) {
    res.render("counselling_mandarin");
    
    
});




// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});



