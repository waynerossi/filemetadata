// server.js
// where your node app starts

// init project
var express = require('express');
var fs = require("fs");
var upload = require("multer")();
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size", upload.single('filetoupload'), function(req, res) {
  if(req.file) {
    var size = req.file.size;
    var fname = req.file.originalname;
    var ftype = req.file.mimetype;
    res.json({
      size: size,
      filename: fname,
      type: ftype
    });  
  } else {
    res.json({
      error: "file could not be found"
    });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
