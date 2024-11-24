const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const students=mongoose.model("students",studentSchema);

module.exports=students;