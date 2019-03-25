

const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");
 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {

   // console.log(req.body.crypto);

   const crypto = req.body.crypto;
   const fita = req.body.fiat;
    
    const baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    const finalURL = baseURL + crypto + fiat;

   request (finalURL, (error, res, body) => {
 
    const data = JSON.parse(body);
    const price = data.last;

  const currentDate = data.display_timestamp;

  res.write("<p>The current date is " + currentDate + "</p>");

  res.write("<h1>The current price of " + crypto + " is " + price + fiat + "</h1>");

  res.send();

   });

});


app.listen(3000, function() {
    console.log("Server is up on port 3000....");
})