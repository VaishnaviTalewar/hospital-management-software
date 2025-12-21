import Appointments from "../models/appointment-model.js";

// GET all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointments.find({});

    res.status(200).json({
      success: true,
      message: "Appointment data retrieved successfully",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve appointment data",
      error: error.message,
    });
  }
};

// ADD appointment
const AddAppointment = async (req, res) => {
  try {
    const { time, date, patientName, age, doctor, feeStatus } = req.body;

    if (!time || !date || !patientName || !doctor) {
      return res.status(400).json({
        success: false,
        message: "Time, date, patient name and doctor are required",
      });
    }

    const appointment = await Appointments.create({
      time,
      date,
      patientName,
      age,
      doctor,
      feeStatus,
    });

    res.status(201).json({
      success: true,
      message: "Appointment added successfully",
      data: appointment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add appointment",
      error: error.message,
    });
  }
};

// UPDATE appointment (Reschedule)
const UpdateAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedAppointment = await Appointments.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: updatedAppointment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update appointment",
      error: error.message,
    });
  }
};

// DELETE appointment
const DeleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAppointment = await Appointments.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
      data: deletedAppointment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete appointment",
      error: error.message,
    });
  }
};

export {
  getAllAppointments,
  AddAppointment,
  UpdateAppointment,
  DeleteAppointment,
};
