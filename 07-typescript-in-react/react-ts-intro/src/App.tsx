import "./App.css";
// import DeleteButton from "./components/DeleteButton";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import Card from "./components/Card";
import { useEffect } from "react";

function App() {
  type User = {
    name: string;
    age: number;
  };
  // const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Greeting name="Bob" age={30} />
      {/* <Greeting name={40} /> This will say Error: number is not assignable */}
      {/* <DeleteButton label="Delete" onDelete={() => console.log("Deleted")} /> */}
      <Button label="Click me" variant="danger" />
      <Card>
        <h3>Title</h3>
        <p>Some description in here</p>
      </Card>

      <Card>Just a plain card</Card>

      <Card>
        <Greeting name="Bobby" age={20} />
      </Card>
    </div>
  );
}

export default App;
