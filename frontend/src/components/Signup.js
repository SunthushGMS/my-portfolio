import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";



export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

 axios.post("http://localhost:5000/api/user/signup", user)
    .then(() => {
      alert("Signup Successfully!");
      setUser({ username: "", email: "", password: "", role: "user" });
      navigate("/login");
    })
    .catch((err) => {
      console.error(err);
      setMessage(
        err.response?.data || "Signup failed: " + err.message
      );
    });
};


  return (
    <div className="d-flex vh-100">
    {/* Left Carousel */}
<div className="col-6 d-none d-md-block p-4"> {/* p-4 = margin from page border */}
  <div
    id="signupCarousel"
    className="carousel slide carousel-fade h-100 rounded-4 overflow-hidden shadow-lg"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div className="carousel-inner h-100">
      <div className="carousel-item active h-100">
        <img
          src={slide2}
          className="d-block w-100 h-100"
          style={{ objectFit: "cover" }}
          alt="Slide 1"
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="fw-bold">Welcome to Dev.com</h3>
          <p>Experience the best developer community platform</p>
        </div>
      </div>

      <div className="carousel-item h-100">
        <img
          src={slide2}
          className="d-block w-100 h-100"
          style={{ objectFit: "cover" }}
          alt="Slide 2"
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="fw-bold">Collaborate & Learn</h3>
          <p>Join thousands of developers worldwide</p>
        </div>
      </div>

      <div className="carousel-item h-100">
        <img
          src={slide3}
          className="d-block w-100 h-100"
          style={{ objectFit: "cover" }}
          alt="Slide 3"
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="fw-bold">Grow with Us</h3>
          <p>Enhance your skills, share your projects</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Right Signup Form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
        <form
          className="auth-card shadow-lg rounded-4 p-5 w-75"
          onSubmit={handleSubmit}
        >
          <h2 className="fw-bold mb-4 text-center">Create Account</h2>

          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="example@email.com"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="******"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Role</label>
            <select
              className="form-select"
              required
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <button type="submit" className="btn btn-warning btn-lg w-100 mb-3">
            Sign Up
          </button>

          <div className="text-center">
            <small className="text-muted">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-decoration-none text-warning fw-bold"
              >
                Login
              </a>
            </small>
          </div>

          {message && (
            <p className="text-center mt-4 text-danger fw-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
