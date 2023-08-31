import React, { useState } from "react";

const Navbar = () => {
  const [userData, setUserData] = useState([]);

  const handleGetUsers = async () => {
    try {
      const response = await fetch("https://regres.in/api/users?page=1"); // Replace with your API endpoint
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <button onClick={handleGetUsers}>Get Users</button>
        </li>
      </ul>

      <div id="userContainer">
        {userData.map((user) => (
          <div className="user" key={user.id}>
            Name: {user.name}, Email: {user.email}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
