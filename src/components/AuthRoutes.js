// AuthRoutes.js
import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./Registration";
import Dashboard from "./Dashboard";

const AuthRoutes = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate("/login");
  //     }
  //   }, [isLoggedIn, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onLogin={() => setIsLoggedIn(true)} />}
      />
      <Route
        path="/register"
        element={<Register onRegister={() => setIsLoggedIn(true)} />}
      />
      {/* {isLoggedIn && (
        <Route
          path="/dashboard"
          element={
            <Dashboard onLogout={logout} user={user} isLoggedIn={isLoggedIn} />
          }
        />
      )} */}
      <Route
        path="/dashboard"
        element={
          <Dashboard onLogout={logout} user={user} isLoggedIn={isLoggedIn} />
        }
      />
    </Routes>
  );
};

export default AuthRoutes;
