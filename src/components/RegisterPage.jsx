// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://projectex.xyz/api/auth/public/register`, form);
      if (response.status === 200 || response.status === 201) {
        alert("Registered successfully!");
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-8 py-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700">Register</h2>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

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
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input"
          required
        />
        <button type="submit" className="btn-primary w-full">Register</button>
        <p className="text-center text-sm mt-2">
          Already have an account? <a className="text-indigo-600 underline" href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
