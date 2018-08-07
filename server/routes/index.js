var express = require('express');
var router = express.Router();
const loginController = require('../controller/login.js');
const studentController = require('../controller/student.js');
const teacherController = require('../controller/teacher.js');

router.post('/login',loginController.login);
//------------------------------------------------------------
router.get('/students',studentController.getStudents);
router.put('/student',studentController.addStudent);
router.delete('/student/:id',studentController.deleteStudent);
router.post('/student/:id',studentController.editStudent);
//------------------------------------------------------------
router.get('/teachers',teacherController.getTeachers);
router.put('/teacher',teacherController.addTeacher);
router.delete('/teacher/:id',teacherController.deleteTeacher);
router.post('/teacher/:id',teacherController.editTeacher);
//------------------------------------------------------------
module.exports = router;
