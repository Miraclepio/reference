const router=require('express').Router()
const {createUser,getASchool,getAllSchool,deleteAStudent}=require("../controller/SchoolController")
const {createStudent}=require('../controller/studentController')
router.post("/school",createUser)
router.get("/school/:id",getASchool)
router.get("/school",getAllSchool)
router.post("/school/:id",createStudent)
router.delete("/school/:id",deleteAStudent)


module.exports=router