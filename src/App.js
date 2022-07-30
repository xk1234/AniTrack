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
  const isLoggedIn = useSelector((state) => state.auth.access_token);

  return (
    <Fragment>
      <Navbar />
      <div className="content">
        {showmsg ? (
          <Message message={showmsg} status={status} link={link} />
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:mediaId" element={<Detail />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/detail/:mediaId" element={<Detail />} />

            <Route path="*" element={<HomePage />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}
