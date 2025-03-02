import React from "react";
import { Link } from "react-router";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/centrolDashboard">
        <h1>Cetrol Dashboard</h1>
      </Link>
      <Link to="/managerDashboard">
        <h1>Manager Dashboard</h1>
      </Link>
      <Link to="/attendance">
        <h1>Attendance Mangement</h1>
      </Link>
      <Link to="/leaveManagement">
        <h1>Leave Management</h1>
      </Link>
      
    </div>
  );
};

export default Header;
