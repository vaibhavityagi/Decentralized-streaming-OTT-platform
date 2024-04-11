/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn}></Navbar>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          ></Route>

          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          ></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
