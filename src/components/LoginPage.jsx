// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://projectex.xyz/api/auth/public/login`, form);
      const { token } = response.data;

      localStorage.setItem('authToken', token);
      setSuccess('Login successful! Redirecting...');
      setError('');

      // Redirect after a short delay (1.5s)
      setTimeout(() => {
        navigate('/shorten');
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed.');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-8 py-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700">Login</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="input"
          required
        />
        <button type="submit" className="btn-primary w-full">Login</button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-indigo-600 underline cursor-pointer"
          >
            Create one
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
