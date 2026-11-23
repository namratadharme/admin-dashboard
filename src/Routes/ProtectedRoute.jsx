
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../ReusableComponent/Loader";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <Loader />;
  }

  return children;
};

export default ProtectedRoute;
