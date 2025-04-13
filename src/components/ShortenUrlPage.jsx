// src/components/ShortenUrlPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ShortenUrlPage = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleShorten = async () => {
    setError('');
    setSuccessMessage('');
    if (!url.trim()) {
      setError('Please enter a URL.');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(
        'https://projectex.xyz/api/urls/shorten',
        { originalUrl: url },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const shortCode = response.data.shortUrl;
      const shortLink = `https://projectex.xyz/${shortCode}`;
      setShortUrl(shortLink);
      setSuccessMessage('URL shortened successfully!');
      setUrl('');
    } catch (err) {
      console.error(err);
      setError('Failed to shorten the URL. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Shorten Your URL</h2>

        <input
          type="text"
          placeholder="Enter your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShorten}
          className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Shorten
        </motion.button>

        {successMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 font-medium text-center"
          >
            {successMessage}
          </motion.p>
        )}

        {shortUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-center"
          >
            <p className="text-gray-700 font-medium">Short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline break-all"
            >
              {shortUrl}
            </a>
          </motion.div>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-500 text-center font-medium"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ShortenUrlPage;
