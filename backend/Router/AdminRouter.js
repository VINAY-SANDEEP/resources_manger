const express = require('express');
const Admin = require('../controllers/AdminController')
const router = express.Router();
router.post('/add-admin', Admin.CreateAdmin);
router.get('/get-admin', Admin.GetAdmin);
module.exports= router;