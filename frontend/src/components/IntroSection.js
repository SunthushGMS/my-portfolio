import React from "react";
import "../assets/css/IntroSection.css";
import proPic from "../assets/images/propic2.jpg"; 
import html from "../assets/images/html.png"; 
import css from "../assets/images/css-3.png"; 
import js from "../assets/images/js.png"; 
import react from "../assets/images/react.png"; 
import node from "../assets/images/node-js.png"; 
import sql from "../assets/images/sql-server.png"; 

const IntroSection = () => {
  const introTexts = [
    "Im, SUNTHUSH G M S.",
    "A passionate Software Engineer.",
    "I love building web applications.",
    "Fitness enthusiast & personal trainer.",
  ];

  const techStack = [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React.js", icon: react },
    { name: "Node.js", icon: node },
    { name: "SQL", icon: sql },
  ];

  return (
    <section className="intro-section container-fluid d-flex align-items-center py-5">
      <div className="row w-100 align-items-center">
        {/* Left: Introduction */}
        <div className="col-lg-6 intro-left text-start">
          <h1 className="fw-bold mb-3">Hello!</h1>
          <h3 className="text-primary mb-4">
            {introTexts.map((text, i) => (
              <span
                key={i}
                className={`intro-text ${i === 0 ? "active" : ""}`}
                style={{ display: i === 0 ? "inline" : "none" }}
              >
                {text}
              </span>
            ))}
          </h3>
          <p className="lead text-light mb-3 ">
            I’m SANTHUSH GMS, a passionate Software Engineer and Web Developer.  
            I specialize in building modern, responsive web applications and delivering clean, efficient code.
          </p>

          <p className="lead text-light mb-2 fw-bold">My tech stack includes</p>
          <div className="d-flex flex-wrap align-items-center mb-3" style={{margin: "30px"}}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center justify-content-center me-3 mb-3"
                style={{ width: "70px" }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="img-fluid mb-1"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="text-light small text-center">{tech.name}</span>
              </div>
            ))}
          </div>

          <p className="lead text-light">
            I also have 7 years of experience in fitness coaching, providing 24x7 personalized training for clients via Instagram and WhatsApp Business.
          </p>
        </div>

        {/* Right: Photo */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center intro-right">
          <img
            src={proPic}
            alt="Koliya Jayaratne"
            className="img-fluid rounded-circle shadow-lg intro-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
