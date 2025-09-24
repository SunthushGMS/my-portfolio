import { useContext, useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <span className="fw-bold text-primary">Dev</span>
          <span className="fw-semibold">.com</span>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link fw-300" to="/services">Services</Link>
            <Link className="nav-link fw-300" to="/">About Me</Link>
            <Link className="nav-link fw-300" to="/">Projects</Link>
          </Nav>

          {/* Right Side */}
          <div className="d-flex align-items-center">
            {user ? (
              <NavDropdown
                title={user.username}
                id="basic-nav-dropdown"
                align="end"
              >
                {/* Dashboard link only for admin */}
                {user.role === "admin" && (
                  <NavDropdown.Item onClick={() => navigate("/dashboard")}>
                    Dashboard
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item onClick={() => navigate("/profile")}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  className="me-2 rounded-pill"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
                <Button
                  variant="primary"
                  className="rounded-pill"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
