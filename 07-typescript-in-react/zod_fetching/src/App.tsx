import "./App.css";
import z from "zod";
import { userSchema } from "./zod/userSchema";
import type { User } from "./zod/userSchema";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const usersSchema = z.array(userSchema);

  async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const users = usersSchema.safeParse(data);
    // console.log(users);

    if (!users.success) {
      console.log(users.error.message);
    }

    return users;
  }

  try {
    getUsers();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <h1>Zod + Typing APIs</h1>
      <h2>Runtime Validation</h2>
    </>
  );
}

export default App;
