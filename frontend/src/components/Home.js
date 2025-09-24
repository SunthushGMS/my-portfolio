import wall from "../assets/images/SE-wallpaper.jpg"
import SampleWorks from "./SampleWorks";
import IntroSection from "./IntroSection";
import code1 from "../assets/images/code1.jpg"; // example image
import full from "../assets/images/full-stack.jpg"; // example image
import team from "../assets/images/team.jpg"; // example image
import inovative from "../assets/images/innovative.jpg"; // example image
import WhatsApp from "../assets/images/whatsapp.png";
import gmail from "../assets/images/gmail.png";
import phone from "../assets/images/telephone.png";
function App() {
    return (
    <section className="relative bg-white text-center py-24 px-6">
      {/* Background Blue Border (like screenshot) */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
              <div className="hero-section custom-hero-mt position-relative text-center text-white mb-5">
  <div className="hero-overlay position-absolute w-100 h-100"></div>
  <img
    src={wall}  // reuse your hotel image or any banner image
    alt="wallpaper"
    className="hero-img w-100"
  />
  <div className="hero-content position-absolute top-50 start-50 translate-middle">
    <h1 className="display-3 fw-bold mb-3">Welcome to Dev.com</h1>
 <p className="lead mb-4" style={{ color: "white" }}>
  "Crafting digital experiences with creativity, precision, and purpose — turning ideas into impactful solutions."
</p>
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <button className="btn btn-primary btn-lg">Hire me</button>
      <button className="btn btn-outline-light btn-lg">Contact me</button>
      <button className="btn btn-info btn-lg text-white">View Portfolio</button>

    </div>
  </div>
</div>

        </h1>
         
      </div>
        <SampleWorks />
        <IntroSection />
  <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold fs-1">Why Choose Me</h2>

      {/* Clean & Efficient Code */}
      <div className="row align-items-center g-4 mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 text-secondary">Clean & Efficient Code</h3>
          <p className="fs-5">
            I write maintainable, well-structured, and optimized code following best practices,
            ensuring your projects are scalable and easy to manage.
          </p>
          <p className="text-muted">
            From front-end to back-end, I focus on readability, performance, and reliability.
          </p>
        </div>
        <div className="col-md-6">
          <div
            className="feature-img rounded"
            style={{
              backgroundImage: `url(${code1})`,
              height: "320px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Full-Stack Expertise */}
      <div className="row align-items-center g-4 mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 text-secondary">Full-Stack Expertise</h3>
          <p className="fs-5">
            Skilled in building full-stack applications using React, Node.js, Express, and databases like MySQL & MongoDB.
          </p>
          <p className="text-muted">
            I create seamless user experiences and robust server-side functionality for your applications.
          </p>
        </div>
        <div className="col-md-6">
          <div
            className="feature-img rounded"
            style={{
              backgroundImage: `url(${full})`,
              height: "320px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Teamwork & Collaboration */}
      <div className="row align-items-center g-4 mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 text-secondary">Teamwork & Collaboration</h3>
          <p className="fs-5">
            Experienced in collaborating with designers, developers, and clients to bring projects from concept to completion.
          </p>
          <p className="text-muted">
            I believe communication and teamwork are key to delivering exceptional results.
          </p>
        </div>
        <div className="col-md-6">
          <div
            className="feature-img rounded"
            style={{
              backgroundImage: `url(${team})`,
              height: "320px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Innovative Solutions */}
      <div className="row align-items-center g-4 mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3 text-secondary">Innovative Solutions</h3>
          <p className="fs-5">
            I constantly explore new technologies and creative approaches to deliver unique, cutting-edge solutions.
          </p>
          <p className="text-muted">
            Whether it’s UI/UX design, performance optimization, or automation, I aim to bring innovation to every project.
          </p>
        </div>
        <div className="col-md-6">
          <div
            className="feature-img rounded"
            style={{
              backgroundImage: `url(${inovative})`,
              height: "320px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  <div className="container my-5">
  <h2 className="text-center fw-bold mb-5">Get in Touch</h2>
  <p className="text-center text-secondary mb-5">
    I’m always open to discussing new projects, opportunities, or collaborations. Reach out via any method below or send me a message directly!
  </p>

  <div className="row g-4">
    {/* Contact Options */}
    <div className="col-lg-4">
      <div className="card text-center shadow-sm h-100 border-0">
        <div className="card-body">
          <img src={gmail} alt="Email" style={{ width: "50px" }} className="mb-3" />
          <h5 className="card-title">Email</h5>
          <p className="card-text">sunthushGMS15@gmails.com</p>
          <a href="mailto:sunthushGMS15@gmails.com" className="btn btn-primary btn-sm">
            Send Email
          </a>
        </div>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="card text-center shadow-sm h-100 border-0">
        <div className="card-body">
          <img src={WhatsApp} alt="WhatsApp" style={{ width: "50px" }} className="mb-3" />
          <h5 className="card-title">WhatsApp</h5>
          <p className="card-text">+94 712 345 678</p>
          <a
            href="https://wa.me/94712345678"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="card text-center shadow-sm h-100 border-0">
        <div className="card-body">
          <img src={phone} alt="Phone" style={{ width: "50px" }} className="mb-3" />
          <h5 className="card-title">Phone</h5>
          <p className="card-text">+94 712 345 678</p>
          <a href="tel:+94712345678" className="btn btn-info btn-sm text-white">
            Call Now
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Form */}
  <div className="row mt-5 justify-content-center">
    <div className="col-lg-8">
      <div className="card shadow-sm border-0 p-4">
        <h4 className="mb-4">Or Send Me a Message Directly</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


    </section>
  );
}

export default App;
