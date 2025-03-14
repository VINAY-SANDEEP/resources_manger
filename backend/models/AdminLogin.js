const mongoose = require('mongoose');
const {Schema} = mongoose;
const AdminSchema = new Schema({
    name : String,
    rollno :String,
});
module.exports = mongoose.model('Admin',AdminSchema);