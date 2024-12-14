const mongoose = require("mongoose");



const HWBSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    selectedState: {
      type: String,
    },
    name: {
      type: String,
    },
    STATE: {
      type: String,
    },
    bsgUid: {
      type: String,
    },
    email: {
      type: String,
    },

    dob: {
      type: String,
    },

    REMARKS: {
      type: String,
    },

    ISSUED_DATE: {
      type: String,
    },


    SL: {
      type: String,
    },
    ADDRESS: {
      type: String,
    },

    CERTIFICATE_DATE: {
      type: String,
    },
    CERTIFICATE_NUMBER: {
      type: String,
    },

    FROM_DATE: {
      type: String,
    },
    TO_DATE: {
      type: String,
    },
    GENDER: {
      type: String,
    },

    LEADER: {
      type: String,
    },
    MOBILE: {
      type: String,
    },

    PARCHMENT_DATE: {
      type: String,
    },

    PLACE: {
      type: String,
    },
    SECTION: {
      type: String,
    },
    UNIT_NAME: {
      type: String,
    },
    EDUCATION_QUALIFICATION: {
      type: String,
    },
    SCOUT_QUALIFICATION: {
      type: String,
    },
  
    PARCHMENT_NO: {
      type: String,
    },
    PARCHMENT_ISSUE:{
      type:String
    },
  

  },
  { timestamps: true }
);

const HWBSchemaModel = mongoose.model("AltDetails", HWBSchema);

module.exports = HWBSchemaModel;
