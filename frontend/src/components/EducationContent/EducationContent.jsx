import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import diet from "../../../public/diet.jpeg";
import hygine from "../../../public/hygine.jpg";
import yoga from "../../../public/yoga.jpeg";

const EducationContent = () => {
  return (
    <div
      style={{
        width: "95%",
        padding: "20px",
        background: "#fefefe",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        margin:"20px auto"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h4 style={{ borderBottom: "2px solid #0d6efd", paddingBottom: "8px", marginTop: "10px", fontWeight:"bold" }}>
          Education Content
        </h4>
        <Button
          style={{
            background: "linear-gradient(90deg, #0d6efd, #0dcaf0)",
            borderRadius: "6px",
            fontSize: "13px",
            padding: "6px 12px",
            border: "none",
            width:"120px"
          }}
        >
          + Add Content
        </Button>
      </div>

      {/* Search + Category */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <InputGroup style={{ maxWidth: "200px" }}>
          <Form.Control placeholder="Search" style={{ height: "32px", fontSize: "13px" }} />
        </InputGroup>

        <Form.Select style={{ width: "150px", height: "32px", fontSize: "13px" }}>
          <option value="">Category</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Healthy Lifestyle">Healthy Lifestyle</option>
          <option value="Healthy Habits">Healthy Habits</option>
        </Form.Select>
      </div>

      {/* Cards */}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <EducationCard
          img={diet}
          title="4 Nutritions to Take Daily"
          category="Nutrition"
          author="Dr. Vaishu"
          date="05/12/2025"
        />
        <EducationCard
          img={hygine}
          title="6 Healthy Lifestyle Tips"
          category="Healthy Lifestyle"
          author="Dr. Vaishu"
          date="06/12/2025"
        />
        <EducationCard
          img={yoga}
          title="Healthy Habits to Follow"
          category="Healthy Habits"
          author="Dr. Vaishu"
          date="07/12/2025"
        />
      </div>
    </div>
  );
};

const EducationCard = ({ img, title, category, author, date }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: hover ? "0 8px 20px rgba(0,0,0,0.15)" : "0 2px 10px rgba(0,0,0,0.05)",
        alignItems: "center",
        width: "100%",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img src={img} alt={title} style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }} />
        <div>
          <h6 style={{ margin: "0 0 6px 0" }}>{title}</h6>
          <small style={{ color: "#555" }}>{author} | {category} | {date}</small>
        </div>
      </div>
      {/* Icons vertically */}
      <div style={{ display: "flex", gap: "10px", fontSize: "18px", color: "#0d6efd" }}>
        <FiEye style={{ cursor: "pointer" }} />
        <FiEdit style={{ cursor: "pointer", color: "#198754" }} />
        <FiTrash2 style={{ cursor: "pointer", color: "#dc3545" }} />
      </div>
    </div>
  );
};

export default EducationContent;
