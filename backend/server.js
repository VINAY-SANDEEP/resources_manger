 const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
const Student = require('./Router/StudentRouter');
const Admin = require('./Router/AdminRouter');
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})
app.use('/api/student',Student)
app.use('/api/admin',Admin)
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})