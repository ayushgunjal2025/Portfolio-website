import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import data from "./data";
import Projectvideos from "./pages/Projectvideos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading time for demonstration
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the loading time as needed

    // Check if user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div className="min-h-screen w-screen bg-black overflow-x-hidden overflow-y-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar className="h-24 w-full" isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/about" element={<About isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/project" element={<Project data={data} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/projectvideos" element={<Projectvideos isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
            <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
