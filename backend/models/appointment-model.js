import mongoose from "mongoose";

let AppointmentSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  feeStatus: {
    type: String,
    enum: ["Paid", "Unpaid"],
    default: "Unpaid",
  },
});

let Appointments = mongoose.model("appointments", AppointmentSchema);

export default Appointments;
