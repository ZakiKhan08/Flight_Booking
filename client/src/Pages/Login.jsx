import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ballpit from "../lib/Ballpit";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });

  // 🔒 Remove scrollbar when this page loads
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // restore on page change
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === form.email && user.pass === form.pass
    );

    if (!matchedUser) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));

    navigate("/home");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🎯 Ballpit Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Ballpit />
      </div>

      {/* 🎯 Foreground Login Box */}
      <div className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400/70 to-purple-600/70">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          {error && (
            <p className="text-red-500 text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="password"
              name="pass"
              value={form.pass}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
