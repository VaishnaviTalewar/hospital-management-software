import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    patient: {
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
    status: {
      type: String,
      default: "New", // New / Complete
    },
  },
  { timestamps: true }
);

export default mongoose.model("appointments", AppointmentSchema);