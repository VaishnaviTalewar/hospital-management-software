import express from "express";
import {
  AddDoctor,
  DeleteDoctor,
  getAllDoctors,
  UpdateDoctor,
} from "../controller/doctor-controller.js";

let router = express.Router();

router.get("/doctors", getAllDoctors);
router.post("/add-doctor", AddDoctor);
router.put("/update-doctor/:id", UpdateDoctor);
router.delete("/delete-doctor/:id", DeleteDoctor);

export default router;
