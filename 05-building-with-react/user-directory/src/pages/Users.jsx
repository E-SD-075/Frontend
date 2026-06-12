import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.error("Failed to fetch: ", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              marginBottom: "3rem",
              border: "1px solid white",
              borderRadius: "6px",
              padding: "1rem",
            }}
          >
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
