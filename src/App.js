import { Fragment } from "react";
import { Routes, Route } from "react-router";
import "./styles.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

import Navbar from "./components/navbar/Navbar";
import Message from "./components/ui/Message";
import { useSelector } from "react-redux";
export default function App() {
  const showmsg = useSelector((state) => state.message.message);
  const status = useSelector((state) => state.message.status);
  const link = useSelector((state) => state.message.link);

  return (
    <Fragment>
      <Navbar />
      <div className="content">
        {showmsg ? (
          <Message message={showmsg} status={status} link={link} />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:mediaId" element={<Detail />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Fragment>
  );
}
