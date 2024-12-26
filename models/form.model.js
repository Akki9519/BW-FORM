const mongoose = require('mongoose');

const trainingCourseSchema = new mongoose.Schema({
  type: { type: String, enum: ['conducted', 'assisted'], required: false },
  courseDate: { type: Date, required: false },
  place: { type: String, required: false },
  leader: { type: String, required: false },
  participants: { type: Number, default: 0 },
  courseFromDate: { type: Date, required: false },
  courseToDate: { type: Date, required: false },
  certificateNumber: { type: String, required: false },
  certificateDate: { type: Date, required: false },
});

const courseSchema = new mongoose.Schema({
  courseType: { type: String, enum: ['LT', 'ALT', 'HWB'], required: false },
  wing: { type: String, required: false },
  subWing: { type: String, required: false },
  trainingCourses: [trainingCourseSchema],
});

const formSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  bsguid: { type: String, required: false },
  dob: { type: Date, required: false },
  bsgState: { type: String, required: false },
  revenueState: { type: String, required: false },
  revenueDistrict: { type: String, required: false },
  pincode: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  gender: { type: String, required: false },
  occupation: { type: String, required: false },
  warrantNumber: { type: String, required: false },
  warrantDate: { type: Date, required: false },
  warrantTillDate: { type: Date, required: false },
  aadharNumber: { type: String, required: false },
  contactNumber: { type: String, required: false },
  whatsappNumber: { type: String, required: false },
  currentAddress: { type: String, required: false },
  permanentAddress: { type: String, required: false },
  sameAddress: { type: Boolean, default: false },
  education: { type: [String], default: [''] },
  courses: [courseSchema],
  parchmentDate: { type: Date }, // Added for HWB and ALT courses
  parchmentNumber: { type: String }, // Added for HWB and ALT courses
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;