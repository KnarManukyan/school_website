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
        }).error(function (err) {
               console.log("Error:" + err);
           });

}

exports.addCourse = function(req,res) {

    models.Timetable.findAll(
      {include: ['Courses'],
       attributes: ['id', 'courseId', 'weekday', 'startTime', 'endTime'],
       where: {
        weekday: req.body.timetable.weekday
       }
      }
   ).then(table => {
     let valid = true;
     for(let i = 0; i<req.body.timetable.length; i++){
       for(let j = 0; j<table.length; j++){
          if(!(req.body.timetable[i].endTime <= table[j].startTime || req.body.timetable[i].startTime >= table[j].endTime)){
            valid = false;
            res.send({
              "code": 400,
              "message": "Time overlap has occured!"
            })
            break;
          }
       }
       if(!valid){
         break;
       }
    }
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
     })
    }
  }).catch(function(error){
      res.send({
        "error": error,
        "code":400,
        "message": "error occured while adding class"
      });
    });
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
  models.Timetable.findAll(
    {include: ['Courses'],
     attributes: ['id', 'courseId', 'weekday', 'startTime', 'endTime'],
     where: {
      weekday: req.body.timetable.weekday
     }
    }
 ).then(table => {
   let valid = true;
   for(let i = 0; i<req.body.timetable.length; i++){
     for(let j = 0; j<table.length; j++){
        if(!(req.body.timetable[i].endTime <= table[j].startTime || req.body.timetable[i].startTime >= table[j].endTime)){
          valid = false;
          res.send({
            "code": 400,
            "message": "Time overlap has occured!"
          })
          break;
        }
     }
     if(!valid){
       break;
     }
  }
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
      console.log(req.body.timetable);
      models.Timetable.update({
        weekday: req.body.timetable[i].weekday,
        startTime: req.body.timetable[i].startTime,
        endTime: req.body.timetable[i].endTime
      }, {
        where: {
          courseId: req.param('id')
        }
      })
    }
    res.send({
      "id": course.id,
      "code":200,
      "message": `Course ${req.body.name} was edited`
    })
   })
  }
}).catch(function(error){
    res.send({
      "error": error,
      "code":400,
      "message": "error occured while editing class"
    });
  });
}
