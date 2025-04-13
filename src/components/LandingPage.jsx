// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md fixed top-0 z-50"
      >
        <h1
          className="text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          LinkLytics
        </h1>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => navigate("/about")}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            About
          </button>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/shorten")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Create Short URL
              </button>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center pt-40 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-indigo-700 mb-6"
        >
          Shorten & Analyze Your Links
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-600 max-w-xl"
        >
          LinkLytics makes sharing and tracking links smarter. Join us today to
          get started!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(isLoggedIn ? "/shorten" : "/login")}
          className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
