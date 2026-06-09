import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { login, logout, user } = useAuth();
  const { activeTheme, toggle, isLightTheme } = useTheme();

  const userLogin = () => {
    const name = prompt("username?");
    login(name);
  };

  return (
    <div
      style={{
        backgroundColor: activeTheme.bg,
        borderRadius: "8px",
        color: activeTheme.text,
        display: "flex",
        height: "45px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <span>Logo</span>

      <span onClick={toggle} style={{ cursor: "pointer" }}>
        {isLightTheme ? "🌚" : "🌝"}
      </span>

      {user.isAuthenticated ? (
        <div>
          <span style={{ marginRight: "10px" }}>{user.name}</span>
          <button onClick={logout}>Log out</button>
        </div>
      ) : (
        <div>
          <span style={{ marginRight: "10px" }}>{user.name}</span>
          <button onClick={userLogin}>Log in</button>
        </div>
      )}
    </div>
  );
}
