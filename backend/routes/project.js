const express = require("express");
const router = express.Router();
const Project = require("../model/Project");
const { verifyAdmin } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter (only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) cb(null, true);
  else cb(new Error("Only images are allowed"));
};

const upload = multer({ storage, fileFilter });

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add project (Admin only)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, stack, sourceFile } = req.body;

    const project = new Project({
      title,
      description,
      stack: stack ? stack.split(",").map(s => s.trim()) : [],
      sourceFile,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await project.save();
    res.json({ message: "✅ Project added", project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update project (Admin only)
router.put("/:id", verifyAdmin, upload.single("image"), async (req, res) => {
  try {
    const { title, description, stack, sourceFile } = req.body;

    const updatedData = {
      title,
      description,
      stack: stack ? stack.split(",").map(s => s.trim()) : [],
      sourceFile,
    };

    if (req.file) updatedData.image = `/uploads/${req.file.filename}`;

    const project = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json({ message: "✅ Project updated", project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Delete project (Admin only)
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "🗑️ Project deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
