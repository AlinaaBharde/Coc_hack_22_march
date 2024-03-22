const express = require('express');
const mongoose = require('mongoose');
const FormData = require('./models/student_model'); 
//require routes
const studentroutes= require('./routes/student.js')
// const userRoutes= require('./routes/user.js')

const cors = require('cors');

const app = express();
const PORT = 8080;
MERN_URI="mongodb+srv://cochack1:WebGenius123@cluster0.lqbklgm.mongodb.net/"

app.use(cors())
app.use(express.json());
app.use((req,res,next)=>{ //3
  console.log(req.path,req.method)
  next()
})

//routes(alag se page) so you would write this line 4
app.use('/api/student',studentroutes)




mongoose.connect(MERN_URI)
.then(()=>{
// listen for requests
    app.listen(PORT,()=>{
        console.log('CONNECTED TO DB & listening on',PORT)
})  
})
.catch((error)=>{
    console.log(error)
})