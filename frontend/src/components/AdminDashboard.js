import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    stack: "",
    image: null,
    sourceFile: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setError("Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("stack", form.stack);
      formData.append("sourceFile", form.sourceFile);
      if (form.image) formData.append("image", form.image);

      await axios.post("http://localhost:5000/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setForm({ title: "", description: "", stack: "", image: null, sourceFile: "" });
      fetchProjects();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add project.");
    }
  };

  const handleDelete = async (id) => {
    setError("");
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      setError("Failed to delete project.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Tech Stack (comma separated)"
          value={form.stack}
          onChange={(e) => setForm({ ...form, stack: e.target.value })}
        />
        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        <input
          className="form-control mb-2"
          placeholder="Source File URL"
          value={form.sourceFile}
          onChange={(e) => setForm({ ...form, sourceFile: e.target.value })}
        />
        <button className="btn btn-success" type="submit">
          Add Project
        </button>
      </form>

      <h4>Projects</h4>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul className="list-group">
          {projects.map((p) => (
            <li
              key={p._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
              <strong className="text-success">Title <p className="text-primary">{p.title}</p> </strong>  
                <br/>
                <strong className="text-success">Stack <p className="text-primary">{p.stack}</p> </strong> 
                 <br/>
                <strong className="text-success">Description <p className="text-primary">{p.description}</p> </strong> 
                 <br/>
                <strong className="text-success">Source File <p className="text-primary">{p.sourceFile}</p> </strong> 
                 <br/>
                {p.image && (
                  <div>
                    <img
                      src={`http://localhost:5000${p.image}`}
                      alt={p.title}
                      style={{ objectFit: "cover", height: "200px", borderRadius: "10px" }}
                    />
                  </div>
                )}
              </div>
              <button
                className="btn btn-danger btn-sm mt-auto align-self-end"
                onClick={() => handleDelete(p._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
