import { Link } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef();

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="navbar navbar-dark bg-dark px-4 fixed-top"
      style={{ zIndex: 1000 }}
    >
      {/* LEFT — LOGO */}
      <Link className="navbar-brand fw-bold" to="/">
        SDN IDS System
      </Link>

      {/* RIGHT — ACTION BUTTONS */}
      {isAuthenticated && (
        <div className="d-flex align-items-center gap-3">

          {/* Dashboard */}
          <Link to="/dashboard" className="btn btn-outline-light">
            Dashboard
          </Link>

          {/* Notifications */}
          <div className="position-relative" ref={dropdownRef}>
            <button
              className="btn btn-outline-light position-relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <i className="bi bi-bell fs-5"></i>

              {/* badge */}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>

            {/* dropdown */}
            {showNotifications && (
              <div
                className="position-absolute bg-white text-dark shadow rounded p-3"
                style={{
                  right: 0,
                  top: "50px",
                  width: "260px",
                  zIndex: 999,
                }}
              >
                <h6 className="fw-bold mb-2">Notifications</h6>
                <hr />

                <p className="mb-2">⚠ Suspicious IP detected</p>
                <p className="mb-2">📡 Network traffic spike</p>
                <p className="mb-0">✔ System healthy</p>
              </div>
            )}
          </div>

          {/* Logout */}
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;