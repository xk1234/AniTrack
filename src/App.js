import { Fragment } from "react";
import { Routes, Route } from "react-router";
import "./styles.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:mediaId" element={<Detail />} />
        </Routes>
      </div>
    </Fragment>
  );
}
