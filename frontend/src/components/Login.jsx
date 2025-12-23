import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // email state
  const [email, setEmail] = useState("");

  // password state
  const [password, setPassword] = useState("");

  // errors state
  const [errors, setErrors] = useState({});

  // navigation
  const navigate = useNavigate();

  // form validation
  const validate = () => {
    let errors = {};  //to store error messages

    if (email === "") {
      errors.email = "Email is required";
    } else if (!email.includes("@")) {
      errors.email = "Invalid email";
    }

    if (password === "") {
      errors.password = "Password is required";
    }

    return errors;
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length === 0) {
      navigate("/dashboard");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('/Login-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1 className="text-center mb-3">Sign Up</h1>
        <h4 className="text-center mb-4">Sign up to your account</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address:
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          

          <button type="submit" className="btn btn-primary w-100">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
