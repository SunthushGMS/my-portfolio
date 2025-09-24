import React from "react";
import { FaCalendarAlt, FaBed, FaUtensils, FaComments } from "react-icons/fa";

import front from "../assets/images/frontend.jpg";
import back from "../assets/images/backend.jpg";
import full from "../assets/images/fullstack.jpg";
import data from "../assets/images/data.jpg";
import fitness from "../assets/images/fitness.jpg";
import android from "../assets/images/android.jpg";


export default function Services() {
  return (
    <div className="services-section container py-5">
  <h2 className="text-center mb-5 section-heading fw-bold">
    What I Can Do for You
  </h2>

  <div className="row g-4 justify-content-center">
    {[
      {
        title: "Full-Stack Development",
        img: full, // add relevant image
        desc: "Building modern web apps with MERN stack (MongoDB, Express, React, Node.js).",
      },
      {
        title: "UI/UX & Frontend",
        img: front,
        desc: "Crafting responsive, user-friendly designs using React, Bootstrap, and Tailwind CSS.",
      },
      {
        title: "Java & Backend Systems",
        img: back,
        desc: "Robust backend solutions with Java OOP, Spring Boot, and REST APIs.",
      },
      {
        title: "Mobile Apps",
        img: android,
        desc: "Cross-platform Android apps with Kotlin and seamless UI/UX experiences.",
      },
      {
        title: "Data Science (Next Step)",
        img: data,
        desc: "Exploring ML and data-driven insights to deliver intelligent solutions.",
      },
      {
        title: "Fitness Coaching",
        img: fitness,
        desc: "Certified online personal training with 7 years of fitness experience.",
      },
    ].map((service, index) => (
      <div className="col-md-6 col-lg-4" key={index}>
        <div className="service-card shadow h-100 d-flex flex-column text-center border-0 rounded-3">
          <img
            src={service.img}
            alt={service.title}
            className="service-img img-fluid p-3"
            style={{ height: "180px", objectFit: "contain" }}
          />
          <div className="service-body flex-grow-1 d-flex flex-column p-3">
            <h5 className="fw-bold">{service.title}</h5>
            <p className="text-secondary">{service.desc}</p>
            <button className="btn btn-outline-primary mt-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Call-to-Action */}
  <div className="text-center mt-5">
    <a href="/contact" className="btn btn-gold btn-lg shadow-sm">
      Let’s Work Together 
    </a>
  </div>
</div>

  );
}
