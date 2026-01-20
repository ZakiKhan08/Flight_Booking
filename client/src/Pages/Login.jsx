import React, { useState } from "react";

const Login = () => {
  let [error, setError] = useState("");

  let [form, setForm] = useState({
    email: "",
    pass: "",
  });

  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    let cleanEmail = form.email.includes("@") && form.email.includes(".com");

    // Password validation
    let hasNumber = /[0-9]/.test(form.pass);
    let hasUpperCase = /[A-Z]/.test(form.pass);
    let hasLowerCase = /[a-z]/.test(form.pass);

    if (!cleanEmail) {
      setError("Please write a valid email");
      return;
    }

    if (!hasNumber || !hasUpperCase || !hasLowerCase) {
      setError("Password must contain number, uppercase and lowercase letter");
      return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    let authenticatedUser = users.find(
      (userData) =>
        userData.email === form.email && userData.pass === form.pass
    );

    if (!authenticatedUser) {
      setError("Invalid email or password");
      return;
    }

    // Login success
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));
    setError("")
    alert("Login successful");
    // window.location.href = "/home";   // or use navigate
  };

  return (
    <>
      <form className="m-30" onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{error}</p>

        Enter email:
        <input
          type="email"
          name="email"
          value={form.email}
          className="border"
          placeholder="Enter Your E-mail"
          onChange={handleChange}
        />

        <br /><br />

        Password:
        <input
          type="password"
          name="pass"
          value={form.pass}
          className="border"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit" className="border cursor-pointer">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
