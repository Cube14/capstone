import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      {/* App Logo / Title */}
      <Link className="navbar-brand fw-bold" to="/">
        SDN IDS System
      </Link>

      {/* Navigation Links */}
      <div>
        {!isAuthenticated ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/">
              Login
            </Link>
            <Link className="btn btn-outline-light" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/dashboard">
              Dashboard
            </Link>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;