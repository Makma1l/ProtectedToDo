import { Routes, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Students from "./components/students/Students";
import LogoutButton from "./components/logout-button/LogoutButton";
import About from "./components/about/About";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import { FaHome, FaSearch, FaCalendar, FaList, FaSignOutAlt, FaBars } from "react-icons/fa";
function App() {
  return (
    <div className="container">
      <header>
        <nav className="nav">
          <h2>Menu</h2>
          <FaBars />

          <input type="search" placeholder="Search..." />
          <ul>
            Tasks
            <li>
              <FaHome />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <span>>></span>
              <NavLink to="/about">Upcoming</NavLink>
            </li>
            <li>
              <FaList />
              <NavLink to="/dashboard">Today</NavLink>
            </li>
            <li>
              <FaCalendar />
              <NavLink to="/students">Calendar</NavLink>
            </li>
          </ul>

          <LogoutButton>
            <FaSignOutAlt /> Sign out
          </LogoutButton>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/about" element={<About />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/students" element={<Students />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
