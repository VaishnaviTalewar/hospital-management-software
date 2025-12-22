import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./utility/connectDB.js";

import PatientRouter from "./routes/patient-route.js";
import AppointmentRouter from "./routes/appointment-route.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

console.log("ENV PORT:", process.env.PORT);

// ✅ DB connect (correct)
ConnectDb();

app.get("/", (req, res) => {
  res.send("Welcome to Hospital Management System");
});

// routes
app.use("/api", PatientRouter);
app.use("/api", AppointmentRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});