const mongoose = require('mongoose');


const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fName: {
    type: String,
    required: true
  },
  mName: {
    type: String,
    required: true
  },
  DOB: {
    type: Date,
    required: true
  },
  aadharNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  sem: {
    type: String,
    required: true
  },
  regNo: {
    type: String,
    required: true
  },
  // religion: {
  //   type: String,
  //   required: true
  // },
  // category: {
  //   type: String,
  //   required: true
  // }
});


const Student = mongoose.model('Student', formDataSchema);

module.exports = Student;
