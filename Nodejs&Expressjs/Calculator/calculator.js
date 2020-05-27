//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

//Receive requests and send responses
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//respond to the "post" request sent by the form
app.post("/", function(req, res) {
  var var1 = Number(req.body.num1);
  var var2 = Number(req.body.num2);

  var result = var1 + var2;

  res.send("The result of the calculation is " + result);

});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = (weight / Math.pow(height, 2));
  console.log(weight + " " + height + " " + result);
  result = Math.floor(result);

  res.send("Your BMI is " + result);
});


app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
