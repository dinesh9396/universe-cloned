// import React from "react";

// const Dashboard = ({ onLogout }) => {
//   return (
//     <div>
//       <button onClick={onLogout}>Logout</button>
//       <h2>Welcome to the Universe Dashboard</h2>
//       {/* <p>You have successfully logged in!</p>
//       <div>
//         <p>Name: {user.name}</p>
//         <p>Email: {user.email}</p>
//         <p>Profession: {user.profession}</p>
//       </div> */}
//     </div>
//   );
// };

// export default Dashboard;
// Dashboard.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ onLogout, user, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    isLoggedIn && (
      <div>
        {/* <p>You have successfully logged in!</p>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Profession: {user.profession}</p>
        </div> */}
        <button onClick={onLogout}>Logout</button>
        <h2>Welcome to the Universe Dashboard</h2>
      </div>
    )
  );
};

export default Dashboard;
