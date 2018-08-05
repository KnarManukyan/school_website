const express = require('express');
const {Students} = require('../models/index.js');
const sequelize = require('sequelize');

exports.getStudents = function(req,res){
  Students.findAll()
  .then((results) => {
    if(results == null)
    {
      res.send({
        "code":204,
        "students":"no student"
        });
    }
    else{
      console.log(results.length);
      const students = [];
      for(let i = 0; i<results.length; i++){
        students[i] = results[i].dataValues;
      }
      console.log(students);
          res.send({
            "code":200,
            "students": students
          });
        }
  })
  .catch(function(error){
    res.send({
      "code":400,
      "message":"error occured while getting students"
    });
  });
}

exports.addStudent = function(req,res) {
  Students.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email
  }).then(() => {
    res.send({
      "code":200,
      "message": `Student ${req.body.firstName} ${req.body.lastName} was added`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while adding students"
    });
  });
}

exports.deleteStudent = function(req,res) {
  Students.destroy({
      where: {
        id: req.param.id
     }
   }).then(() => {
    res.send({
      "code":200,
      "message": `Student was deleted`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while deleting students"
    });
  });
}

exports.editStudent = function(req,res) {
  Students.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email
  }, {
    where: {
      id: req.param.id
    }
  }).then(() => {
    res.send({
      "code":200,
      "message": `Student was deleted`
    });
  }).catch(function(error){
    res.send({
      "code":400,
      "message": "error occured while deleting students"
    });
  });
}
