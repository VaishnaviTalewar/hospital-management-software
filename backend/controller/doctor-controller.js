import Doctors from "../models/doctor-model.js";

// GET all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctors.find({});

    res.status(200).json({
      success: true,
      message: "Doctor data retrieved successfully",
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctor data",
      error: error.message,
    });
  }
};

// ADD doctor
const AddDoctor = async (req, res) => {
  try {
    const { name, qualification, specialist, experience, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required",
      });
    }

    const doctor = await Doctors.create({
      name,
      qualification,
      specialist,
      experience,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Doctor data added successfully",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add doctor data",
      error: error.message,
    });
  }
};

// UPDATE doctor
const UpdateDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDoctor = await Doctors.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor data updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update doctor data",
      error: error.message,
    });
  }
};

// DELETE doctor
const DeleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDoctor = await Doctors.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor data deleted successfully",
      data: deletedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete doctor data",
      error: error.message,
    });
  }
};

export {
  getAllDoctors,
  AddDoctor,
  UpdateDoctor,
  DeleteDoctor,
};
