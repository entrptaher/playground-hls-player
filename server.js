var express = require("express");
var app = express();
var path = require("path");
var morgan = require('morgan')
morgan('tiny')

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, "public"))); //  "public" off of current is root

app.listen(port, host, function(err) {
  console.log("Running Public server on " + host + ":" + port);
});
