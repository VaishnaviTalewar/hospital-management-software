import mongoose from "mongoose";

let DoctorSchema = new mongoose.Schema({
  name: { type: String },
  qualification: { type: String },
  specialist: { type: String },
  experience: { type: String },
  phone: { type: String },
});

let Doctors = mongoose.model("doctors", DoctorSchema);

export default Doctors;
