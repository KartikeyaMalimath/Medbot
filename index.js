"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var router = express.Router()
const User = require('./userSchema');

const restService = express();
var listener = restService.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/medbot', {
  useNewUrlParser: true
}, () => {
  console.log('connected to database')
  }
)

restService.use(
    bodyParser.urlencoded({
        extended: false
    })
);
restService.use(bodyParser());
restService.use(bodyParser.json());

restService.post("/number", (req, res) => {
    const userdb = new User();
    
    userdb.phone_number = //req.body.phone_number;
        req.body.result &&
        req.body.result.parameters &&
        req.body.result.parameters.phone_number;

    userdb.userName = //req.body.userName;
        req.body.result &&
        req.body.result.parameters &&
        req.body.result.parameters.name;

    userdb.age = //req.body.age;
        req.body.result &&
        req.body.result.parameters &&
        req.body.result.parameters.age;

    //User.findone({number : number}).then(user =>)
    userdb.save().then(userSaved => {
        res.send("user saved");
    }).catch(err =>{
        res.send("not saved");
        console.log(err);
    });
    
});