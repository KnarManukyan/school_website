const express = require('express');
const {Users} = require('../models/index.js');
const sequelize = require('sequelize');
const token = require('./createToken.js')
exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  Users.findOne({where : {email: email}})
  .then((results) => {
    if(results == null)
    {
      res.send({
        "message":"Email does not exits"
        });
    }
    else{
      if(Object.keys(results).length > 0)  {
        if(results.password == password){
          res.send({
            "code":200,
            "message":"successfully logged in",
            "token": token
          });
        }
        else {
        res.send({
          "message":"Wrong password. Try again."
          });
        }
      }
    }
  })
  .catch(function(error){
    res.send({
      "failed":"error occured"
    });
  });
}
