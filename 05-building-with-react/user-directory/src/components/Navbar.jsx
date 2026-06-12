import { NavLink } from "react-router";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#e94560" : "#4fc3f7",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <header style={{ backgroundColor: "#16213e", padding: "1rem 2rem" }}>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <NavLink style={linkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={linkStyle} to="/about">
          About
        </NavLink>
        <NavLink style={linkStyle} to="/users">
          Users
        </NavLink>
      </nav>
    </header>
  );
}
