const mongoose = require('mongoose');
const {Schema} = mongoose;
const StudentSchema = new Schema({
    rollno:String,
    password:String,
});
module.exports = mongoose.model('User',StudentSchema);