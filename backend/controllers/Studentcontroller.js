const Student = require('../models/StudentLogin')
const CreateStudent = async (req,res) => {
    try {
        let {rollno,password} = req.body;
        let student = new Student({rollno,password});
        await student.save();
        res.status(201).json({message:"student created sucessfull"})
    } catch (error) {
        res.status(404).json({message:"unable to create"})
    }
}
const getStudent = async (req,res) => {
    try {
        const getStu = await Student.find();
        res.status(200).json(getStu)
    } catch (error) {
        res.status(404).json({message:"not found"})
    }
}
module.exports = {CreateStudent,getStudent};