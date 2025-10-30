import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Get login function from App via Outlet context
  const { login } = useOutletContext();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    // Call the login function with form data
    login(formData);
    // Redirect to Home after login
    navigate("/");
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="password">Password</label>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
