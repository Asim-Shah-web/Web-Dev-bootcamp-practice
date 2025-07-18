//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import _ from "lodash";
import pg from "pg";

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "MyOwnDataBase",
  password: "DivinedB",
  port: 5432,
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

db.connect();
let blogs=[];
app.get("/", async (req,res)=> {
const result = await db.query("SELECT * FROM blog ");
blogs=result.rows;

  res.render("home.ejs",{
    homeSCont:homeStartingContent,
    posts:blogs,
  });
});

app.get("/about",(req,res)=>{
  res.render("about.ejs",{
    aboutinfo:aboutContent,
  });
});
app.get("/contact",(req,res)=> {
  res.render("contact.ejs",{
  contactinfo:contactContent,
  });
});

app.get("/compose",(req,res)=> {
  res.render("compose.ejs");
});

app.post("/compose",(req,res)=>{
  //res.render("compose.ejs");
  //console.log(req.body["mytitle"],req.body["myblog"]);
  /*var post = {
    title : req.body["mytitle"] ,
    content : req.body["myblog"] ,
    datetime: req.body["postTime"],
  };
  */
 // blogs.push(post);
  //console.log(blogs);
  const title=req.body["mytitle"];
  const content=req.body["myblog"];
  const datetime=req.body["postTime"];
  db.query("INSERT INTO blog (title,contents,datetime) VALUES ($1,$2,$3)",[title,content,datetime]);
  res.redirect("/");
});

app.get("/post/:postName",(req,res)=>{
const reqUrl = _.lowerCase(req.params.postName);
blogs.forEach(function(post){
  const storedPost = _.lowerCase(post.title);
  if (storedPost==reqUrl) {
    res.render("post.ejs",{
    reqPost: post,  
    });
  };
});
});





app.listen(port , function() {
  console.log("Server started on port 3000");
});
