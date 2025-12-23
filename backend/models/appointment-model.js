import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "New",
    },
    feeStatus: {
      type: String,
      default: "Unpaid",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
