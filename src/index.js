import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import CentrolDashboard from "./CentrolDashboard";
import ManagerDashboard from "./ManagerDashboard";
import Attendance from "./Attendance";
import LeaveManagement from "./LeaveManagement";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/centrolDashboard",
    element: <CentrolDashboard />,
  },
  {
    path: "/managerDashboard",
    element: <ManagerDashboard />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
  {
    path: "/leaveManagement",
    element: <LeaveManagement />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
