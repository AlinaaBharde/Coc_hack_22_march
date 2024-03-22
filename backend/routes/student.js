const express=require('express')
const {
    create_a_student,
    get_all_student,
    get_a_student,
    delete_a_student,
    update_a_student
}=require('../controllers/studentcontroller') //HOUSING THE FUNCTIONS 
//THAT DESCRIBE WHAT TO DO WHEN A REQUEST HAS BEEN SENT
// const requireAuth =require('../middleware/requireAuth')
//ROUTING (PROVIDED BY EXPRESS)
const router= express.Router()
// router.use(requireAuth)
//get all workouts
router.get('/',get_all_student)

//get a single workout
router.get('/:id',get_a_student)

//post a new workout
router.post('/',create_a_student )

//delete
router.delete('/:id',delete_a_student)

router.patch('/:id',update_a_student)

//IMP TO EXPORT THE ROUTER INORDER TO IMPORT IT IN server.js
module.exports=router