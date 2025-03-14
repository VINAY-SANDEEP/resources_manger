const express = require('express');
const Student = require('../controllers/Studentcontroller')
const router = express.Router();
router.post('/add-student', Student.CreateStudent);
router.get('/get-student', Student.getStudent);
module.exports= router;