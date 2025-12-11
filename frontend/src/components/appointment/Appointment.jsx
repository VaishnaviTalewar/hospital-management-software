import React, { useState } from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";
import { MdClose } from "react-icons/md"; // Close icon

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("new");

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
      {/* Header with Tabs */}
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
              borderBottom: activeTab === "complete" ? "3px solid #007bff" : "none",
            }}
            onClick={() => setActiveTab("complete")}
          >
            Complete Appointment
          </h5>
        </div>

        {/* + New Appointment Button */}
        <Button
          style={{
            background: "#0d6efd",
            borderRadius: "6px",
            fontSize: "13px",
            width: "130px",
            padding: "6px 0px",
          }}
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

      {/* Scrollable Table */}
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
            {/* NEW APPOINTMENTS */}
            {activeTab === "new" && (
              <>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>9:30 AM</td>
                  <td>05/12/2025</td>
                  <td>Ashna Anjum</td>
                  <td>22</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>10:00 AM</td>
                  <td>05/12/2025</td>
                  <td>Riya Sharma</td>
                  <td>26</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>11:15 AM</td>
                  <td>05/12/2025</td>
                  <td>Karan Patel</td>
                  <td>29</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>12:30 AM</td>
                  <td>05/12/2025</td>
                  <td>Aman Hiranwar</td>
                  <td>29</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>2:00 AM</td>
                  <td>05/12/2025</td>
                  <td>Vyankat Talewar</td>
                  <td>29</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>2:45 AM</td>
                  <td>05/12/2025</td>
                  <td>Vaishu Talewar</td>
                  <td>29</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>3:30 AM</td>
                  <td>05/12/2025</td>
                  <td>Laxmi Talewar</td>
                  <td>29</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>4:10 AM</td>
                  <td>05/12/2025</td>
                  <td>Darshan Talewar</td>
                  <td>29</td>
                  <td>Dr Vaishu</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
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
              </>
            )}

            {/* COMPLETE APPOINTMENTS */}
            {activeTab === "complete" && (
              <>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>12:00 PM</td>
                  <td>06/12/2025</td>
                  <td>Ashna Anjum</td>
                  <td>32</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "red", fontWeight: "600" }}>Unpaid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Request fee</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>1:30 PM</td>
                  <td>06/12/2025</td>
                  <td>Riya Sharma</td>
                  <td>24</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "green", fontWeight: "600" }}>Paid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Approved</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>2:45 PM</td>
                  <td>06/12/2025</td>
                  <td>Karan Patel</td>
                  <td>28</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "red", fontWeight: "600" }}>Unpaid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Request fee</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>3:00 PM</td>
                  <td>06/12/2025</td>
                  <td>Aman Hiranwar</td>
                  <td>28</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "green", fontWeight: "600" }}>Paid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Approved</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>3:45 PM</td>
                  <td>06/12/2025</td>
                  <td>Vyankat Talewar</td>
                  <td>28</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "red", fontWeight: "600" }}>Unpaid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Request fee</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>4:30 PM</td>
                  <td>06/12/2025</td>
                  <td>Vaishu Talewar</td>
                  <td>28</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "green", fontWeight: "600" }}>Paid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Approved</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>4:30 PM</td>
                  <td>06/12/2025</td>
                  <td>Laxmi Talewar</td>
                  <td>28</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "green", fontWeight: "600" }}>Paid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Approved</td>
                </tr>
                <tr style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>4:30 PM</td>
                  <td>06/12/2025</td>
                  <td>Darshan Talewar</td>
                  <td>28</td>
                  <td>Dr Vaishu</td>
                  <td style={{ color: "green", fontWeight: "600" }}>Paid</td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Approved</td>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
        <Button size="sm" variant="light" style={{ padding: "6px 20px", fontSize: "13px" }}>Previous</Button>
        <Button size="sm" variant="light" style={{ background: "#0d6efd", color: "white", padding: "4px 12px", fontSize: "13px" }}>1</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>2</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>3</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>Next</Button>
      </div>
    </div>
  );
};

export default Appointment;
