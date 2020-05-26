//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res){
  console.log(req);
});

app.get("/about", function (req, res){
  res.send("Hi my name is Stephen and I'm learning how to become a web developer.");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
