const mongoose = require("mongoose");

const ltSchema = new mongoose.Schema({
    SL: { type: Number  },
    REGION: { type: String},
    STATE: { type: String  },
    name: { type: String },
    SECTION: { type: String,  },
    HONOURABLE_CHARGE_NO: { type: String  },
    DATE: { type: String },
    RENEWED_UPTO: { type: String },
    STATUS: { type: String, default: "New User" },
    email: { type: String  },
    AADHAR_NO: { type: String },
    bsgUid: { type: String},
    MOBILE: { type: String,  },
    dob: { type: String,  },
    TRG_IN_OTHER_SECTION: { type: String },
    ROT: { type: String },
    ROT_DATE: { type: String },
    ROT_PLACE: { type: String },
    EDUCATION_QUALIFICATION: { type: String },
    BSG_QUALIFICATION_WITH_SECTION: { type: String },
    honourableNumber: { type: String },
    chargeNumber: { type: String},
    sectionCode:{type:String},
    status: { type: String, default: 'Pending' },
    certificate: {
        type: Buffer, // Store the PDF as a Buffer if saving in the database
        required: false, 
      },
      certificatePath: {
        type: String, // Store the file path if saving the PDF to the filesystem
        required: false,
      },
}, { timestamps: true });

const AltModel = mongoose.model('lt', ltSchema);

module.exports = AltModel;