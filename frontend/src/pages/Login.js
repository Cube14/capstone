import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email, password });

      setMessage(res.data.message);

      login(); // set auth state
      navigate("/dashboard");

    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
  <div className="container mt-5" style={{ maxWidth: "400px" }}>
    <div className="card p-4 shadow">
      <h3 className="text-center mb-4">Login</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>

      <p className="text-danger text-center mt-3">{message}</p>
      <p className="text-center mt-3">
  Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  </div>
);
}

export default Login;