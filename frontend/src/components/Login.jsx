import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { setTokenCookie } from "../utils/auth";

const Login = () => {
  // email store karne ke liye
  const [email, setEmail] = useState("");
 

  // password store karne ke liye
  const [password, setPassword] = useState("");

  // error messages ke liye
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // form check karne ka function
  const validate = () => {
    let errors = {};
    if (email === "") {
      errors.email = "Email is required";
    }

    if (password === "") {
      errors.password = "Password is required";
    }

    return errors;
  };

  // login button click
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length === 0) {
      // call backend login
      api
        .post('/login', { email, password })
        .then((res) => {
          const token = res.data.token;
          if (token) setTokenCookie(token);
          navigate('/dashboard');
        })
        .catch((err) => {
          const msg = err?.response?.data?.error || 'Login failed';
          setErrors({ form: msg });
        });
    } else {
      // error haitoh show hoga
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
        className="p-4 shadow rounded"
        style={{ width: "100%", maxWidth: "400px", background: "#fff" }}
      >
        <h2 className="text-center mb-3">Login</h2>
        <p className="text-center text-muted">Login to your account</p>

        <form onSubmit={handleSubmit}>
          
      

          {/* Email fiwld */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Password field*/}
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          {errors.form && (
            <div className="text-danger text-center mt-2">{errors.form}</div>
          )}

          <p className="text-center mt-3">
            New user? <Link to="/Signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
