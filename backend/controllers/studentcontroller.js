//require the schema-based-db and mongoose
const Student= require('../models/student_model');
const mongoose = require('mongoose')

//get all workouts
const get_all_student= async (req,res)=>{
    // const user_id= req.user._id
    const students= await Student.find({}).sort({createdAt:-1}) 
    //to find all, thats why .find({})
    res.status(200).json(students)
    console.log(workouts)
}

//get a single workout

const get_a_student= async (req,res)=>{
    const {id}=req.params //to get the parameters from the req.body=> req.params
    
    //code for if id is not valid
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such student"})
    }
    const student= await Student.findById(id)
    //code for if workout does not exist for the id
    if(!student)
{
    return res.status(404).json({error:"No such students"})
}
    res.status(200).json(student)
}

//create new student
const create_a_student= async (req,res)=>{
    const {name,fName,mName,DOB,aadharNo,email,phone,
        gender,address,branch,year,sem,regNo}=req.body
    console.log("b-1")
        let emptyFields = [];

        if (!name) {
            emptyFields.push('name');
        }
        if (!fName) {
            emptyFields.push('fName');
        }
        if (!mName) {
            emptyFields.push('mName');
        }
        if (!DOB) {
            emptyFields.push('DOB');
        }
        if (!aadharNo) {
            emptyFields.push('aadharNo');
        }
        if (!email) {
            emptyFields.push('email');
        }
        if (!phone) {
            emptyFields.push('phone');
        }
        if (!gender) {
            emptyFields.push('gender');
        }
        if (!address) {
            emptyFields.push('address');
        }
        if (!branch) {
            emptyFields.push('branch');
        }
        if (!year) {
            emptyFields.push('year');
        }
        if (!sem) {
            emptyFields.push('sem');
        }
        if (!regNo) {
            emptyFields.push('regNo');
        }

    if(emptyFields.length> 0)
    {
        return res.status(400).json({error:'Please complete all fields',emptyFields})
    }

    //add doc to db
    try{
        // const user_id=req.user._id
        const student=await Student.create({name,fName,mName,DOB,aadharNo,email,phone,
            gender,address,branch,year,sem,regNo})
            console.log(name,fName,mName,DOB,aadharNo,email,phone,
                gender,address,branch,year,sem,regNo)
            console.log("b-2")
        res.status(200).json(student)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete a workout
const delete_a_student=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such student"})
    }
    const student= await Student.findOneAndDelete({_id:id})
    if(!student)
{
    return res.status(404).json({error:"No such student"})
}
    res.status(200).json(student)


}
//update a workout

const update_a_student=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such student"})
    }
    const student=await Student.findOneAndUpdate({_id:id},{
        ...req.body // to ensure rest of the info which is not updated is intact?
    })
    if(!student)
{
    return res.status(404).json({error:"No such students"})
}
    res.status(200).json(student)
}


//export
module.exports={
    create_a_student,
    get_all_student,
    get_a_student,
    delete_a_student,
    update_a_student
}