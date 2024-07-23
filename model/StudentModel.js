const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    StudentName: {
        type: String,
        required:true
    },

    StudentClass: {
        type: String,
        required: true
    },
   
    departMent: {
        type: String,
        
        enum:{
            values:['Science','Commercial','Art'],
            message:"department must be 'Science','Commercial','Art' "
        },
        require:true,
    },
    gender: {
        type: String,
        require:true, 
        enum:{
            values:['male','female'],
            message:"department must be 'male','female' "
        }
    },
    DeletedStudent:{
        type:Boolean,
        default:false

    },

    StudentInfo: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"school"
    }]
})
    
const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel; 
 