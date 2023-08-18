// Navigation.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  console.log("Is user logged in:", isLoggedIn);
  return (
    <div className="navigation_div">
      <h1 className="navigation_h1">UNIVERSE</h1>
      <nav className="navigation_nav">
        {!isLoggedIn &&
          pathname !== "/login" &&
          pathname !== "/register" &&
          pathname !== "/dashboard" && (
            <>
              <Link className="home_link" to="/">
                <i class="fas fa-home"></i> Home
              </Link>
              <div className="spacer"></div>
              <Link className="login_link" to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
              <Link className="register_link" to="/register">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </>
          )}

        {isLoggedIn && (
          <>
            <Link className="home_link" to="/">
              <i class="fas fa-home"></i> Home
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
