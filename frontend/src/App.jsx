/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Footer from "./components/Footer"
import './App.css'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn}></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
