"use strict";

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// var router = express.Router()
const User = require('./userSchema');
mongoose.connect('mongodb://kartikeya:km123456@ds115613.mlab.com:15613/medbot', {useMongoClient: true}, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
})

const restService = express();
//var listener = restService.listen(8888, function(){
//    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
//});


mongoose.Promise = global.Promise;
   

restService.use(
    bodyParser.urlencoded({
        extended: false
    })
);
restService.use(bodyParser());
restService.use(bodyParser.json());

restService.post("/user", (req, res) => {
    const userdb = new User();
    
    userdb.phone_number = //req.body.phone_number;
        req.body.queryResult.parameters['phone_number'];

    userdb.userName = //req.body.userName;
        req.body.queryResult.parameters['names'];

    userdb.age = //req.body.age;
        req.body.queryResult.parameters['age'];

    
    userdb.save().then(userSaved => {
        res.send("user saved");
    }).catch(err =>{
        res.send("not saved");
        console.log(err);
    });
    
});