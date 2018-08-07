var express = require('express');
var router = express.Router();
const loginController = require('../controller/login.js');
const studentController = require('../controller/student.js');

router.post('/login',loginController.login);
//------------------------------------------------------------
router.get('/students',studentController.getStudents);
router.put('/student',studentController.addStudent);
router.delete('/student/:id',studentController.deleteStudent);
router.post('/student/:id',studentController.editStudent);
//------------------------------------------------------------
module.exports = router;
