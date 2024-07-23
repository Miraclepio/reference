
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    SchoolName: {
        type: String,
        required:true
    },

    SchoolAddress: {
        type: String,
        required: true
    },
   
    email: {
        type: String,
        require:true
    },

    StudentInfo: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    }]
})

const UserModel = mongoose.model("school", UserSchema);

module.exports = UserModel; 
 