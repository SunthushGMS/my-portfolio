import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import Header from "./components/Header";
import HomePage from "./components/Home"; // or ./pages/HomePage
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Services from "./components/Services";

import { useContext } from "react";

// Protected route component for admin
function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    // Logged in but not admin, redirect to home
    return <Navigate to="/" />;
  }

  // Admin user, allow access
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      

      {/* Admin-only route */}
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      {/* Catch-all route: redirect unknown URLs to home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header /> {/* Always visible */}
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
