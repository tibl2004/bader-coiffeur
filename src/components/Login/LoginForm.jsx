import React, { useState } from "react";
import "./LoginForm.scss";

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login erfolgreich (Demo)");
  };

  return (
    <div className="login">

      <div className="login-overlay"></div>

      <div className="login-box">

        <h1>
          BADER <span>LOGIN</span>
        </h1>

        <p>Willkommen zurück beim Premium Coiffeur System</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Passwort"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Einloggen</button>

        </form>

      </div>

    </div>
  );
}

export default LoginForm;