
const UserModel=require("../model/SchoolModel")
const StudentModel=require('../model/StudentModel')
exports.createUser=async(req,res)=>{
    try {
        const createSchool=await UserModel.create(req.body)
        res.status(201).json({message:`${createSchool.SchoolName} has been created`,createSchool})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getASchool=async(req,res)=>{
    const {id}=req.params
    const school=await UserModel.findById(id).populate('StudentInfo')
    const studentTotalNumber=school.StudentInfo.length
    if(!id){
        return res.status(404).json('not found')
    }else
        {
        return res.status(200).json({message:`there are ${studentTotalNumber} student(s) in ${school.SchoolName} currently`,school})
    }
}


exports.getAllSchool=async(req,res)=>{
    const {id}=req.params
    const school=await UserModel.find().populate("StudentInfo")
    if(school.length===0){
        return res.status(404).json('not found')
    }else 
        {
        return res.status(200).json({message:" all schools",total:school.length + " Schools created currently",data:school,})
    }
}


// Delete a student
exports.deleteAStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await StudentModel.findByIdAndDelete(id);
        
        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json({
            message: `${deletedStudent.StudentName} has been deleted successfully`,
            deletedStudent
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};