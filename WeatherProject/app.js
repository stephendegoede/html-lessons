//jshint esversion:6

// Below is a simple JS script that connects to an API.
// The JSON file that is delivered by the API is
// converted to a JS Object and the data is used to
// display the weather for a city.

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Cape Town&appid=f646a0a7fe2bf029815852cdc3a3cf3f&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      const city = weatherData.name;

      res.write("<h1>Showing the weather for " + city);
      res.write("<h3>The weather is currently " + weatherDescription + "<h3>");
      res.write("<h3>The temperature is " + temp + " degrees Celcius<h3>");
      res.write("<img src=" + imageURL + ">");
      res.send();

      // console.log(temp);
    });
  });

  //res.send("Server is up and running.");
});


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
