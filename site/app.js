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

// Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Use middlewares
const { toaster } = require("./middleware/toaster-middleware.js");
app.use(toaster);

//Receiving client informaitno via body method
const bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));

// Setup multer (files will temporarily be saved in the "temp" folder).
// Setup fs
const fs = require("fs");
const multer = require("multer");
const upload = multer({
    dest: path.join(__dirname, "temp")
});

//Database access
const messageDao = require("./modules/message-dao.js");




// When a GET request is made to "/" (i.e. the root path), render the
// "home" view. This can be found in /views/home.handlebars
app.get("/", function (req, res) {
    res.render("home");
});
app.get("/counselling", function (req, res) {
    res.render("counselling");
});
app.get("/counselling_mandarin", function (req, res) {
    res.render("counselling_mandarin");

});
app.get("/form", function (req, res) {
    res.render("form");
});
app.get("/articles_post", function (req, res) {
    res.render("articles_post");
});
app.get("/articles", async function (req, res) {
    const articles = await messageDao.retrieveAllArticles();
    res.locals.articles = articles;
    console.log(articles);
    res.render("articles");
    //res.json(articles); //empty [] : with current one insertion. why?
});

app.post("/client_enquiries", async function (req, res) {
    const message = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        introduction: req.body.memo
    };

    if (message) {
        await messageDao.createMessage(message);
        res.setToastMessage("Thanks for the message. I will contact you soon!");
        res.redirect("./form");
        
    };
});
app.get("/message", async function(req, res){
    
    //res.json(await messageDao.retrieveAllMessages());
    const messages = await messageDao.retrieveAllMessages();
    res.locals.messages = messages;
    console.log(messages);
    res.render("message");

})

// When we POST to /uploadImage, use Multer to process the "imageFile" upload.
// Then, move the uploaded image to /public/uploadedFiles/NAME, where NAME is the
// file's original name.
// Finally, send the image and caption to the uploadDetails view for rendering.
app.post("/uploadImage", upload.single("image"), async function (req, res) {

    const fileInfo = req.file;

    // Move the file somewhere more sensible
    const oldFileName = fileInfo.path;
    const newFileName = `./public/uploadedFiles/${fileInfo.originalname}`;
    fs.renameSync(oldFileName, newFileName);

    // Get some information about the file and send it to the uploadDetails view for rendering.
    //res.locals.image = fileInfo.originalname;

    req.body.image = fileInfo.originalname;

    const article = {
        title: req.body.title,
        image: fileInfo.originalname,
        content: req.body.content
    };

    if (article) {
        await messageDao.createArticle(article);
        res.setToastMessage("Article posted!");
        res.redirect("./articles");
        
    };
    
});


// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});



