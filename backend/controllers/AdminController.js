const Admin = require('../models/AdminLogin');
const CreateAdmin = async (req,res) => {
    try {
        let {name,rollno} = req.body;
        let admin = new Admin({name,rollno});
        await admin.save();
        res.status(201).json({message:"Admin created successfully"});
    } catch (error) {
        res.status(404).json({message:"unable to create admin"})
    }
}
const GetAdmin = async (req,res) => {
   try {
    const getAdmin = await Admin.find();
    res.status(200).json(getAdmin);
   } catch (error) {
    res.status(404).json({message:"not found"})
   }
}
module.exports = {CreateAdmin,GetAdmin};