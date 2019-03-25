

const express = require ("express");
const bodyParser = require("body-parser");
 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    console.log(req.body.crypto);

});




app.listen(3000, function() {
    console.log("Server is up on port 3000....");
})