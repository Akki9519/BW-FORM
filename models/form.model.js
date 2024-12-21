// const mongoose = require('mongoose');

// const formSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Assuming email should be unique
//   },
//   bsguid: {
//     type: String,
//     required: true,
//   },
//   dob: {
//     type: Date,
//     required: true,
//   },
//   bsgState: {
//     type: String,
//     required: true,
//   },
//   revenueState: {
//     type: String,
//     required: true,
//   },
//   revenueDistrict: {
//     type: String,
//     required: true,
//   },
//   pincode: {
//     type: String,
//     required: true,
//   },
//   maritalStatus: {
//     type: String,
//     enum: ['single', 'married', 'other'],
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ['male', 'female', 'other'],
//     required: true,
//   },
//   occupation: {
//     type: String,
//     enum: ['business', 'salaried', 'other'],
//     required: true,
//   },
//   warrantNumber: {
//     type: String,
//     required: true,
//   },
//   warrantDate: {
//     type: Date,
//     required: true,
//   },
//   warrantTillDate: {
//     type: Date,
//     required: true,
//   },
//   aadharNumber: {
//     type: String,
//     required: true,
//   },
//   contactNumber: {
//     type: String,
//     required: true,
//   },
//   whatsappNumber: {
//     type: String,
//     required: true,
//   },
//   currentAddress: {
//     type: String,
//     required: true,
//   },
//   permanentAddress: {
//     type: String,
//     required: true,
//   },
//   sameAddress: {
//     type: Boolean,
//     default: false,
//   },
//   education: {
//     type: [String], // Array of strings for education qualifications
//     required: true,
//   },
//   selectedWing: {
//     type: String,
//     enum: ['Scout', 'Guide'],
//     required: true,
//   },
//   selectedCourse: {
//     type: String,
//     enum: ['LT', 'ALT', 'HWB', 'Advanced', 'Basic'],
//     required: true,
//   },
//   selectedSubWing: {
//     type: String,
//     required: true,
//   },
//   selectType: {
//     type: String,
//     enum: ['conducted', 'assisted'],
//     required: true,
//   },
//   trainingCourses: [{
//     courseDate: {
//       type: Date,
//       required: true,
//     },
//     place: {
//       type: String,
//       required: true,
//     },
//     participants: {
//       type: Number,
//       required: true,
//     },
//     leader: {
//       type: String,
//       required: true,
//     },
//   }],
//   lastROT: {
//     courseFromDate: {
//       type: Date,
//       required: true,
//     },
//     courseToDate: {
//       type: Date,
//       required: true,
//     },
//     certificateNumber: {
//       type: String,
//       required: true,
//     },
//     certificateDate: {
//       type: Date,
//       required: true,
//     },
//     leader: {
//       type: String,
//       required: true,
//     },
//     place: {
//       type: String,
//       required: true,
//     },
//   },
// }, { timestamps: true });

// const Form = mongoose.model('Form', formSchema);

// module.exports = Form;


const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Assuming email should be unique
  },
  bsguid: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  bsgState: {
    type: String,
    required: true,
  },
  revenueState: {
    type: String,
    required: true,
  },
  revenueDistrict: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: ['single', 'married', 'other'],
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  occupation: {
    type: String,
    enum: ['business', 'salaried', 'other'],
    required: true,
  },
  warrantNumber: {
    type: String,
    required: true,
  },
  warrantDate: {
    type: Date,
    required: true,
  },
  warrantTillDate: {
    type: Date,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  sameAddress: {
    type: Boolean,
    default: false,
  },
  education: {
    type: [String], // Array of strings for education qualifications
    required: true,
  },
  selectedWing: {
    type: String,
    enum: ['Scout', 'Guide'],
    required: true,
  },
  selectedCourse: {
    type: String,
    enum: ['LT', 'ALT', 'HWB', 'Advanced', 'Basic'],
    required: true,
  },
  selectedSubWing: {
    type: String,
    required: true,
  },
  selectType: {
    type: String,
    enum: ['conducted', 'assisted'],
    required: true,
  },
  trainingCourses: [{
    courseDate: {
      type: Date,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    participants: {
      type: Number,
      required: true,
    },
    leader: {
      type: String,
      required: true,
    },
  }],
  lastROT: {
    courseFromDate: {
      type: Date,
      // required: true,
    },
    courseToDate: {
      type: Date,
      // required: true,
    },
    certificateNumber: {
      type: String,
      // required: true,
    },
    certificateDate: {
      type: Date,
      // required: true,
    },
    leader: {
      type: String,
      // required: true,
    },
    place: {
      type: String,
      // required: true,
    },
  },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;