import { useState } from "react";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="enter your email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="enter your password"
        onChange={handleChange}
      />

      <button>Login</button>
    </form>
  );
}
