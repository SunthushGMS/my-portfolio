import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
  Alert,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { Clipboard, ClipboardCheck } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SampleWorks = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copiedId, setCopiedId] = useState(null); // track which project was copied

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    // reset after 2s
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto my-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">My Sample Works</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project._id}>
            <Card className="shadow-sm h-100">
              {project.image && (
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000${project.image}`}
                  style={{ objectFit: "cover", height: "200px" }}
                />
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <Card.Text style={{ flexGrow: 1 }}>
                  {project.description}
                </Card.Text>

                {/* Source File with Copy Option */}
                <Card.Text className="text-secondary d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center" style={{ maxWidth: "70%" }}>
                    <span className="fw-semibold text-primary me-2">Link</span>
                    <br/>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id={`tooltip-${project._id}`}>{project.sourceFile}</Tooltip>}
                    >
                      <span
                        className="text-dark text-truncate"
                        style={{ maxWidth: "100%", display: "inline-block" }}
                      >
                        {project.sourceFile}
                      </span>
                    </OverlayTrigger>
                  </div>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="d-flex align-items-center"
                    onClick={() => handleCopy(project._id, project.sourceFile)}
                  >
                    {copiedId === project._id ? (
                      <>
                        <ClipboardCheck className="me-1" /> Copied
                      </>
                    ) : (
                      <>
                        <Clipboard className="me-1" /> Copy
                      </>
                    )}
                  </Button>
                </Card.Text>

                {/* Tech Stack */}
                <div>
                  {project.stack.map((tech, index) => (
                    <Badge bg="secondary" key={index} className="me-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SampleWorks;
