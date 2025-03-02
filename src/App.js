import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import CentrolDashboard from "./CentrolDashboard";
import ManagerDashboard from "./ManagerDashboard";
import Attendance from "./Attendance";
import LeaveManagement from "./LeaveManagement";
import EmployeeRegistration from './Employee/EmployeeResigtration.jsx'
import Header from "./Header/Header.jsx";
import { Outlet } from 'react-router';
import { Children } from 'react';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/centrolDashboard",
        element: <CentrolDashboard />,
      },
      {
        path:"/employeeRegistration",
        element: <EmployeeRegistration />
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
      }
    ]
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
