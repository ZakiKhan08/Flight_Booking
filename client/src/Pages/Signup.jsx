import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RippleGrid from "../lib/RippleGrid";

const Signup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    pass: "",
    cpass: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") return setError("Please enter your name");
    if (!/^\d{10}$/.test(form.number))
      return setError("Please enter a valid mobile number");
    if (form.pass.length < 6)
      return setError("Password must be at least 6 characters");
    if (form.pass !== form.cpass)
      return setError("Passwords do not match");

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === form.email))
      return setError("User already exists");

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful 🎉");
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🌊 RIPPLE GRID FULL BACKGROUND */}
      <div className="absolute bg-black inset-0">
        <RippleGrid />
      </div>

      {/* optional dark overlay */}
      <div className="absolute inset-0 bg-black/20 " />

      {/* 🟢 SIGNUP CONTENT */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="bg-white/80 p-6 rounded-2xl shadow-lg w-full max-w-md">

          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create Account
          </h2>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <input
              type="password"
              name="pass"
              value={form.pass}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <input
              type="password"
              name="cpass"
              value={form.cpass}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;