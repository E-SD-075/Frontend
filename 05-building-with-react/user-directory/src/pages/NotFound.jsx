import { Link } from "react-router";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <p>Did you get lost?</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
