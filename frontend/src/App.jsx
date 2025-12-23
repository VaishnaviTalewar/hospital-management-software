import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PatientPage from "./pages/PatientPage";
import Layout from "./components/common/Layout";
import AppointmentsPage from "./pages/AppointmentsPage";
import DoctorPage from "./pages/DoctorPage";
import MessagesPage from "./components/Message/Message";
import MedicinePage from "./components/MedicineInventory/MedicineInventory";
import EducationContent from "./components/EducationContent/EducationContent";
import SettingPage from "./components/settings/Settings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/signup";

const App = () => {
  return (
    <div>
      <Routes>
         {/*Sign up */}
        <Route path="/signup" element={<Signup />} />

         {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Dashboard">
                <DashboardPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Patient Page */}
        <Route
          path="/patient"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Patient Details">
                <PatientPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Appointment Page */}
        <Route
          path="/Appointments"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Appointment">
                <AppointmentsPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Doctor Page */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Doctor">
                <DoctorPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Message Page */}
        <Route
          path="/Messages"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Messages">
                <MessagesPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Medicine Inventory Page */}
        <Route
          path="/Medicine-Inventory"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Medicine Inventory">
                <MedicinePage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Education Content Page */}
        <Route
          path="/Education-content"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Education Content">
                <EducationContent />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Settings Page */}
        <Route
          path="/Settings"
          element={
            <ProtectedRoute>
              <Layout pageTitle="Settings">
                <SettingPage />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
