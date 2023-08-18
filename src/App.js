// App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./components/AuthRoutes";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app_div">
      {/* <h1>UNIVERSE</h1> */}
      <Router>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <AuthRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
