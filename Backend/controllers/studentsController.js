const students=require("../models/studentsModel");

handleGetStudents=async (req,res)=>{
    const allStudents=await students.find();
    return res.status(200).json(allStudents);
};

handlePostStudents=async (req,res)=>{
    const body=req.body;
    await students.create({
        name:body.name,
        email:body.email,
        gender:body.gender,
        university:body.university,
        skill:body.skill,
    });
    return res.status(201).json({status:"successfully created student."})
};

handleDeleteStudents=async (req,res)=>{
    const result = await students.findByIdAndDelete(req.params.id);
    return res.status(200).json({status:"succesfully deleted student."})
};

module.exports={
    handleGetStudents,
    handlePostStudents,
    handleDeleteStudents,
}