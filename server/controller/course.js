const express = require('express');
const models = require("../models");
const sequelize = require('sequelize');

exports.getCourses = function(req,res){
  models.Timetable.findAll(
    {include: ['Courses'],
     attributes: ['id', 'courseId', 'weekday', 'startTime', 'endTime']
   })
     .then(function(timetable) {
        models.Courses.findAll(
          {
              include: ['Teacher','Classes'],
              attributes: ['id', 'name', 'description', 'classId', 'teacherId', 'startDate', 'endDate']
            })
        .then(function(courses) {
          let finalResult = [...courses];
          for(let i = 0; i<finalResult.length; i++){
            finalResult[i].dataValues.timetable = [];
            for(let j = 0; j<timetable.length; j++){
              if(courses[i].id === timetable[j].courseId){
                finalResult[i].dataValues.timetable.push(timetable[j]);
              }
            }
          }
          res.send(finalResult)
           })
        }).catch(function (err) {
               console.log("Error:" + err);
           });

}

let valid = true;

let validate = function(body, id){
  for(let k = 0; k < body.timetable.length; k++){
    models.Timetable.findAll(
      {include: ['Courses'],
       attributes: ['id', 'courseId', 'classId', 'weekday', 'startTime', 'endTime'],
       where: {
         classId: body.classId,
         weekday: body.timetable[k].weekday
       }
      }
   ).then(table => {
      for(let j = 0; j<table.length; j++){
        if(id != table[j].courseId){
          if(!(body.timetable[k].endTime <= table[j].startTime || body.timetable[k].startTime >= table[j].endTime)){
            valid = false;
            break;
          }
        }
       }
     }).catch(function(error){
             console.log(error);
           });
   }
}

exports.addCourse = function(req,res) {
  validate(req.body);
   setTimeout(() => {
     if(valid){
       models.Courses.create({
         name: req.body.name,
         description: req.body.description,
         classId: req.body.classId,
         teacherId: req.body.teacherId,
         startDate: req.body.startDate,
         endDate: req.body.endDate
       }).then((course) => {
           for(let i = 0; i<req.body.timetable.length; i++){
             models.Timetable.create({
               courseId: course.id,
               classId: req.body.classId,
               weekday: req.body.timetable[i].weekday,
               startTime: req.body.timetable[i].startTime,
               endTime: req.body.timetable[i].endTime
             })
           }
           res.send({
             "id": course.dataValues.id,
             "code":200,
             "message": `Course ${req.body.name} was added`
           })
         }).catch(function(error){
              res.send({
                "error": error,
                "code":400,
                "message": "error occured while adding class"
              });
            });
    } else {
      res.send({
        "code": 400,
        "messageToShow": "Time overlap has occured!"
      })
    }
  }, 100);
  valid = true;
  }

exports.deleteCourse = function(req,res) {
  models.Timetable.destroy({
      where: {
        courseId: req.param('id')
     }
   })
  models.Courses.destroy({
      where: {
        id: req.param('id')
     }
   }).then(() => {
    res.send({
      "code":200,
      "message": `Course was deleted`
    });
  }).catch(function(error){
    res.send({
      "error":error,
      "code":400,
      "message": "error occured while deleting this course"
    });
  });
}

exports.editCourse = function(req,res) {
  validate(req.body, req.param('id'));
   setTimeout(() => {
     if(valid){
       models.Courses.update({
         name: req.body.name,
         description: req.body.description,
         classId: req.body.classId,
         teacherId: req.body.teacherId,
         startDate: req.body.startDate,
         endDate: req.body.endDate
       }, {
         where: {
           id: req.param('id')
         }
       }).then((course) => {
       for(let i = 0; i<req.body.timetable.length; i++){
         models.Timetable.update({
           weekday: req.body.timetable[i].weekday,
           startTime: req.body.timetable[i].startTime,
           endTime: req.body.timetable[i].endTime
         }, {
           where: {
             id: req.body.timetable[i].id
           }
         })
       }
       res.send({
         "code":200,
         "message": `Course ${req.body.name} was edited`
       })
      }).catch(function(error){
              res.send({
                "error": error,
                "code":400,
                "message": "error occured while adding class"
              });
            });
    } else {
      res.send({
        "code": 400,
        "messageToShow": "Time overlap has occured!"
      })
    }
  }, 100);
  valid = true;
  }
