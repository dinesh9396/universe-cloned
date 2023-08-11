import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Dashboard = ({ onLogout, user, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    isLoggedIn && (
      <div>
        <h2>Welcome to the Universe Dashboard</h2>
        <Home />
      </div>
    )
  );
};

export default Dashboard;
