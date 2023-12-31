import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css";

function Register({ onRegister, setUser: setGlobalUser }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
    license: "",
    diaryblogAccess: false,
    typeitAccess: false,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/register", user);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        // const userRes = await axios.get("http://127.0.0.1:5000/api/user", {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // });

        // onRegister(userRes.data);
        onRegister();

        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="register_div">
      <form className="register_form" onSubmit={handleSubmit}>
        <input
          className="register_input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="register_input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="register_input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="register_input"
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
        />
        <input
          className="register_input"
          type="text"
          name="license"
          placeholder="License"
          onChange={handleChange}
        />
        <label className="register_label">
          <input
            className="register_checkbox"
            type="checkbox"
            name="diaryblogAccess"
            checked={user.diaryblogAccess}
            onChange={handleCheckboxChange}
          />
          Diary Blog Access
        </label>
        <label className="register_label">
          <input
            className="register_checkbox"
            type="checkbox"
            name="typeitAccess"
            checked={user.typeitAccess}
            onChange={handleCheckboxChange}
          />
          Type It Access
        </label>
        <button className="register_button" type="submit">
          Register
        </button>
        <Link className="login_link" to="/login">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
