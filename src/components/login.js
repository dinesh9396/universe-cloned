import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login({ onLogin, setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/login",
        credentials
      );
      console.log(res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        // const userRes = await axios.get("http://127.0.0.1:5000/api/user", {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // });

        // onLogin(userRes.data);
        onLogin();

        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="login_div">
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          className="login_input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="login_input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="login_button" type="submit">
          Login
        </button>
        <Link className="register_link" to="/register">
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
