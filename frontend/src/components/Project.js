import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", stack: "", image: "", sourceFile: "" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/projects", {
      ...form,
      stack: form.stack.split(","),
    });
    setForm({ title: "", description: "", stack: "", image: "", sourceFile: "" });
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>
      
      <form onSubmit={handleSubmit} className="mb-5">
        <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}/>
        <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}/>
        <input className="form-control mb-2" placeholder="Tech Stack (comma separated)" value={form.stack} onChange={(e) => setForm({ ...form, stack: e.target.value })}/>
        <input className="form-control mb-2" placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}/>
        <input className="form-control mb-2" placeholder="Source File URL" value={form.sourceFile} onChange={(e) => setForm({ ...form, sourceFile: e.target.value })}/>
        <button className="btn btn-success">Add Project</button>
      </form>

      <h4>Projects</h4>
      <ul className="list-group">
        {projects.map((p) => (
          <li key={p._id} className="list-group-item d-flex justify-content-between align-items-center">
            {p.title}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
