import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    // Basic validation
    if (form.name.trim() === "") {
      setError("Please enter your name");
      return;
    }

    if (isNaN(form.number) || form.number.length < 10) {
      setError("Please enter a valid mobile number");
      return;
    }

    if (form.pass.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.pass !== form.cpass) {
      setError("Passwords do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let alreadyUser = users.find(
      (u) => u.email === form.email
    );

    if (alreadyUser) {
      setError("User already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful 🎉");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="max-h-screen p-12 flex items-center justify-center bg-gradient-to-b from-green-500 to-blue-400">
      <div className="bg-white p-1 rounded-2xl shadow-lg w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Enter your number"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="pass"
              value={form.pass}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpass"
              value={form.cpass}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Extra */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="text-green-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
