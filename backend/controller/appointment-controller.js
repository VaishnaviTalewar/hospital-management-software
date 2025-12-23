import Appointments from "../models/appointment-model.js";

//Get all appointments with pagination
const getAllAppointments = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const total = await Appointments.countDocuments();

    const appointments = await Appointments.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: appointments,
      pagination: {
        page,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//Add appointment
const AddAppointment = async (req, res) => {
  try {
    const { patient, age, doctor, date, time, feeStatus } = req.body;

    if (!patient || !age || !doctor || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const appointment = await Appointments.create({
      patientName: patient,
      age,
      doctorName: doctor,
      date,
      time,
      status: feeStatus === "Paid" ? "Complete" : "New",
      feeStatus,
    });

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//Update appointment
const UpdateAppointment = async (req, res) => {
  try {
    const updated = await Appointments.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//Delete appointment
const DeleteAppointment = async (req, res) => {
  try {
    await Appointments.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export {
  getAllAppointments,
  AddAppointment,
  UpdateAppointment,
  DeleteAppointment,
};
