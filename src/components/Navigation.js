// Navigation.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Render the Login and Register links only if the current route is not '/login' or '/register' or '/dashboard'
  // Render Logout button only if isLoggedIn is true
  return (
    <nav>
      {!isLoggedIn &&
        pathname !== "/login" &&
        pathname !== "/register" &&
        pathname !== "/dashboard" && (
          <>
            <Link className="login_link" to="/login">
              Login
            </Link>
            <Link className="register_link" to="/register">
              Register
            </Link>
          </>
        )}
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navigation;
