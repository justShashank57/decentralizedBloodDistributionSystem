import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import About from "./pages/AboutPage/About";
import SearchBlood from "./pages/BloodSearch/BloodSearch";
import BloodRequest from "./pages/BloodRequest/BloodRequest";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  const handleChange = (newUser) => {
    setUser(newUser);
  };

  console.log(user);

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/signup"
            element={<SignUp handleChange={handleChange} />}
          />
          <Route
            path="/login"
            element={<Login handleChange={handleChange} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/blood-search" element={<SearchBlood />} />
          <Route path="/blood-request" element={<BloodRequest />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
