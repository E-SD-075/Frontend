import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch: ", err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <Link to="/users">← back to users</Link>
      <h1>{user.name}</h1>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
    </div>
  );
}
