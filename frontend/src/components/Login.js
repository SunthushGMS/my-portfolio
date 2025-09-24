import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import { AuthContext } from "../components/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/user/login", form);

    let userData = res.data.user;

    // If email matches admin, mark as admin
    if (userData.email === "admin@example.com") {
      userData.isAdmin = true;
    } else {
      userData.isAdmin = false;
    }

    // Update global auth state
    login(userData);

    setMessage("Login Successful!");

    setTimeout(() => {
      navigate("/"); // redirect to home
    }, 1500);
  } catch (err) {
    setMessage(err.response?.data || "Login failed");
  }
};


  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-gradient">
      <div className="row w-100 m-4 shadow-lg rounded-4 overflow-hidden bg-white">
        {/* Left Carousel */}
        <div className="col-md-6 d-none d-md-block p-0">
          <div
            id="loginCarousel"
            className="carousel slide carousel-fade h-100"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <img
                  src={slide1}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src={slide2}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src={slide3}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-4 fw-bold text-dark">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control p-3 rounded-3"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control p-3 rounded-3"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 rounded-3"
              >
                Login
              </button>
            </form>
            {message && (
              <p className="text-center mt-3 text-success fw-semibold">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
