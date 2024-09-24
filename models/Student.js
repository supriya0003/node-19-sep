const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
       rollNo: {type: String, required: true},
       firstName: {type: String},
       lastName: {type: String},
       adharcard: {type: String},
       fatherName: {type: String},
       mobileNo: {type: String},
})


module.exports = mongoose.model('Student', StudentSchema);