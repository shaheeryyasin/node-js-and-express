const express = require("express");
const path = require("path");
const mongoose = require("mongodb://localhost/nodekb");
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/nodekb");
let db = mongoose.connection;

//check connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});
//check for DB errors
db.on("error", function (err) {
  console.log(err);
});

// init app
const app = express();

//Bring in models
let Article = require("./models/article");

//load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false }));

//parse application/json
app.use(bodyParser.json());

//set public folder
app.use(express.static(path.join(__dirname,'public')));

//home route
app.get("/", function (req, res) {
  Article.find({}, function (err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {
        title: "Articles",
        aricles: articles,
      });
    }
  });
});

//get single article
app.get('/article/:id', function(req,res){
  article.findById(req.params.id, function(err, article){
    res.render('article',{
     title:'Add Article'x
    });
  });
});

//add route
app.get("/articles/add", function (req, res) {
  res.render("add", {
    title: "Add article",
  });
});

//add submit post route
app.post("/articles/add", function (req, res) {
  let article = new article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  article.save(function(err){
    if(){
      console.log(err);
      return;
    } else{
      res.redirect('/');
    }

  });

});

//load edit form
app.get('/article/edit/:id', function(req,res){
  article.findById(req.params.id, function(err, article){
    res.render('edit_article',{
      title:'edit article',
      article:article
    });
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000...");
});
