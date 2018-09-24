var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
  extended: false
}));

var login = require('./login/login');

app.use("/login", login);

//assign port number

app.listen(8082);
console.log("server listening to port no 8082");
