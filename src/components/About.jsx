import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center px-6 py-16">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-purple-700 mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          About LinkLytics
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          LinkLytics is your one-stop solution for generating, tracking, and optimizing shortened URLs. 
          We aim to simplify your sharing experience with powerful analytics and a smooth UI. 
          Whether you're a developer, marketer, or just a link enthusiast, LinkLytics helps you make every click count.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
