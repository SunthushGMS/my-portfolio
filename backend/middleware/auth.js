const jwt = require("jsonwebtoken");
const User = require("../model/User"); // Make sure the path is correct

// Verify that a user is logged in
const verifyUser = async (req, res, next) => {
  const authHeader = req.headers.authorization; // Expecting "Bearer TOKEN"
  if (!authHeader) return res.status(401).json({ message: "Access Denied: No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied: No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user; // attach user to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Verify that the logged-in user is an admin
const verifyAdmin = async (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied: Admins only" });
    }
    next();
  });
};

module.exports = { verifyUser, verifyAdmin };
