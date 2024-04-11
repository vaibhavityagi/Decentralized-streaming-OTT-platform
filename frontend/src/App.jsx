/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
