import React, { useEffect, useState } from "react";
import { Table, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import axios from "axios";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [showModal, setShowModal] = useState(false);

  const [newAppointment, setNewAppointment] = useState({
    time: "",
    date: "",
    patient: "",
    age: "",
    doctor: "",
    feeStatus: "Unpaid",
  });

  const [appointments, setAppointments] = useState({
    new: [],
    complete: [],
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //fetching paginated appointments
  const fetchAppointments = async (pageNo = 1) => {
    const res = await axios.get(
      `${import.meta.env.VITE_LOCALHOST_SERVER_URL}/api/appointments?page=${pageNo}&limit=5`
    );

    if (res.data.success) {
      const data = res.data.data;

      setAppointments({
        new: data.filter((item) => item.status === "New"),
        complete: data.filter((item) => item.status === "Complete"),
      });

      setTotalPages(res.data.pagination.totalPages);
    }
  };

  useEffect(() => {
    fetchAppointments(page);
  }, [page]);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await axios.post(
      `${import.meta.env.VITE_LOCALHOST_SERVER_URL}/api/add-appointment`,
      newAppointment
    );

    fetchAppointments(page);
    setShowModal(false);

    setNewAppointment({
      time: "",
      date: "",
      patient: "",
      age: "",
      doctor: "",
      feeStatus: "Unpaid",
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `${import.meta.env.VITE_LOCALHOST_SERVER_URL}/api/delete-appointment/${id}`
    );

    fetchAppointments(page);
  };

  
  return (
    <div
      className="p-3 shadow-lg"
      style={{
        background: "white",
        marginTop: "18px",
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        height: "90%",
        borderRadius: "12px",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center" style={{ gap: "20px" }}>
          <h5
            className="fw-bold mb-0"
            style={{
              cursor: "pointer",
              borderBottom: activeTab === "new" ? "3px solid #007bff" : "none",
            }}
            onClick={() => setActiveTab("new")}
          >
            New Appointment
          </h5>

          <h5
            className="fw-bold mb-0"
            style={{
              cursor: "pointer",
              borderBottom:
                activeTab === "complete" ? "3px solid #007bff" : "none",
            }}
            onClick={() => setActiveTab("complete")}
          >
            Complete Appointment
          </h5>
        </div>

        <Button
          style={{
            background: "#0d6efd",
            borderRadius: "6px",
            fontSize: "13px",
            width: "130px",
            padding: "6px 0px",
          }}
          onClick={() => setShowModal(true)}
        >
          + New Appointment
        </Button>
      </div>

      {/* Search */}
      <div className="d-flex gap-3 mb-3">
        <InputGroup style={{ maxWidth: "220px" }}>
          <InputGroup.Text style={{ background: "#eef2f7", height: "34px" }}>
            🔍
          </InputGroup.Text>
          <Form.Control
            placeholder="Search"
            style={{
              height: "34px",
              background: "#f8f9fc",
              border: "1px solid #dce3ea",
              fontSize: "13px",
            }}
          />
        </InputGroup>
      </div>

      {/* Table */}
      <div
        style={{
          maxHeight: "330px",
          overflowY: "auto",
          border: "1px solid #eef2f7",
          borderRadius: "6px",
        }}
      >
        <Table hover responsive style={{ fontSize: "14px", marginBottom: 0 }}>
          <thead style={{ background: "#f3f6fb", position: "sticky", top: 0 }}>
            <tr>
              <th>Time</th>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Doctor</th>
              {activeTab === "complete" && <th>Fee Status</th>}
              <th>User Action</th>
            </tr>
          </thead>

          <tbody>
            {activeTab === "new" &&
              appointments.new.map((item) => (
                <tr key={item._id} style={{ height: "48px" }}>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>{item.patientName}</td>
                  <td>{item.age}</td>
                  <td>{item.doctorName}</td>
                  <td style={{ display: "flex", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: 600 }}>
                      Reschedule
                    </span>
                    <div
                      onClick={() => handleDelete(item._id)}
                      style={{
                        background: "red",
                        color: "white",
                        borderRadius: "50%",
                        width: "22px",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <MdClose size={16} />
                    </div>
                  </td>
                </tr>
              ))}

            {activeTab === "complete" &&
              appointments.complete.map((item) => (
                <tr key={item._id} style={{ height: "48px" }}>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>{item.patientName}</td>
                  <td>{item.age}</td>
                  <td>{item.doctorName}</td>
                  <td
                    style={{
                      color: item.feeStatus === "Paid" ? "green" : "red",
                      fontWeight: 600,
                    }}
                  >
                    {item.feeStatus}
                  </td>
                  <td style={{ color: "blue", fontWeight: 600 }}>
                    Fees
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button
          size="sm"
          variant="light"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>

        <Button size="sm" variant="light">
          {page}
        </Button>

        <Button
          size="sm"
          variant="light"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Time</Form.Label>
              <Form.Control name="time" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control name="patient" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age" type="number" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Doctor</Form.Label>
              <Form.Control name="doctor" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Fee Status</Form.Label>
              <Form.Select name="feeStatus" onChange={handleChange}>
                <option value="Unpaid">Unpaid</option>
                <option value="Paid">Paid</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Appointment;
