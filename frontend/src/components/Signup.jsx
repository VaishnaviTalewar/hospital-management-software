import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { setTokenCookie } from "../utils/auth";

const Signup = () => {
  // name state
  const [name, setName] = useState("");

  // email state
  const [email, setEmail] = useState("");

  // password state
  const [password, setPassword] = useState("");

  // errors state
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // form validation
  const validate = () => {
    let errors = {};

    if (name === "") {
      errors.name = "Name is required";
    }

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
      api
        .post('/register', { name, email, password })
        .then((res) => {
          const token = res.data.token;
          if (token) setTokenCookie(token);
          navigate('/dashboard');
        })
        .catch((err) => {
          const msg = err?.response?.data?.error || 'Registration failed';
          setErrors({ form: msg });
        });
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

          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
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
          {errors.form && (
            <div className="text-danger text-center mt-2">{errors.form}</div>
          )}
          
        </form>
        <p className="text-center mt-3 mb-0">
            Already have an account?
            <Link to="/Login" className="fw-semibold text-decoration-none">
              Login
            </Link>
          </p>
      </div>
    </div>
  );
};

export default Signup;
