import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/help">Help</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Navbar;