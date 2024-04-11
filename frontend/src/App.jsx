/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Login from "./pages/Login"
import Footer from "./components/Footer"
import './App.css'
=======
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Test from "./pages/Test";
>>>>>>> 24752fbfcd7bee210adea66609a071cf93f4993e

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

          <Route path="/test" element={<Test />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
