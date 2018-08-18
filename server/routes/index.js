var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const loginController = require('../controller/login.js');
const studentController = require('../controller/student.js');
const teacherController = require('../controller/teacher.js');
const classController = require('../controller/class.js');
const courseController = require('../controller/course.js');
require('dotenv').config();

router.post('/login',loginController.login);
//------------------------------------------------------------
router.use(getToken);
router.use(verifyToken);
//------------------------------------------------------------
router.get('/students',studentController.getStudents);
router.post('/student',studentController.addStudent);
router.delete('/student/:id',studentController.deleteStudent);
router.put('/student/:id',studentController.editStudent);
//------------------------------------------------------------
router.get('/teachers',teacherController.getTeachers);
router.post('/teacher',teacherController.addTeacher);
router.delete('/teacher/:id',teacherController.deleteTeacher);
router.put('/teacher/:id',teacherController.editTeacher);
//------------------------------------------------------------
router.get('/classes',classController.getClasses);
router.post('/class',classController.addClass);
router.delete('/class/:id',classController.deleteClass);
router.put('/class/:id',classController.editClass);
router.get('/freeTeachers',classController.getFreeTeachers);
//------------------------------------------------------------
router.get('/courses',courseController.getCourses);
router.post('/course',courseController.addCourse);
router.delete('/course/:id',courseController.deleteCourse);
router.put('/course/:id',courseController.editCourse);
//------------------------------------------------------------
function getToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearerToken = bearerHeader.substring(8, bearerHeader.length-1);
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(401);
    }
}

function verifyToken(req, res, next) {
    jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
        if (err) {
            res.sendStatus(401);
        } else {
            next();
        }
    })
}
module.exports = router;
