const StudentModel=require("../model/StudentModel")
const SchoolModel=require('../model/SchoolModel')
exports.createStudent=async(req,res)=>{
    try {
        const {id}=req.params
        const SchoolId=await SchoolModel.findById(id)
        const createStudent=await StudentModel.create(req.body)
        createStudent.StudentInfo=SchoolId  
       
        await createStudent.save()
        SchoolId.StudentInfo.push(createStudent)
        await SchoolId.save()
       
      
        res.status(201).json({message:' new student created successful',data:createStudent})
        
    } catch (error) {
       res.status(500).json(error.message) 
    }
} 