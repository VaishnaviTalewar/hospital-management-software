import express from "express";
import {
  getAllAppointments,
  AddAppointment,
  UpdateAppointment,
  DeleteAppointment,
} from "../controller/appointment-controller.js";

const router = express.Router();

router.get("/appointments", getAllAppointments);
router.post("/add-appointment", AddAppointment);
router.put("/update-appointment/:id", UpdateAppointment);
router.delete("/delete-appointment/:id", DeleteAppointment);

export default router;
