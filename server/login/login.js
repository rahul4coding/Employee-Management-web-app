var express = require('express');

var prop = require('../config/db_properties');

var mongo = require('mongodb');

var rkb = mongo.MongoClient;

var router = express.Router();

var token = require('../token/token');

// let's create rest api

router.post('/', function (req, res) {
  var uname = req.body.uname;
  var upwd = req.body.upwd;

  rkb.connect("mongodb://localhost:27017/miniproject", function (err, db) {
    db.collection("login_details").find({
      "uname": uname,
      "upwd": upwd
    }).toArray(function (err, array) {
      // res.send(array);
      if (array.length > 0) {

        var my_token = token({
          'uname': uname,
          'upwd': upwd
        }, 'rkb1nd1@');
        res.send({
          'login': 'success',
          'token': my_token
        });
      } else {
        res.send({
          'login': 'failed'
        });
      }
    });
  });


  module.exports = router;




})
