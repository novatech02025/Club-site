// src/components/SignUp.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 rounded-lg bg-slate-700 border border-slate-600"/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 rounded-lg bg-slate-700 border border-slate-600"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 rounded-lg bg-slate-700 border border-slate-600"/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 rounded-lg bg-slate-700 border border-slate-600"/>
          <button type="submit" className="w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-slate-400">
          Already have an account? <Link to="/login" className="text-purple-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
