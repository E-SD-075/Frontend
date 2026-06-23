import {
  type ChangeEvent,
  useState,
  type SubmitEvent,
  type MouseEvent,
} from "react";

export default function NameField() {
  const [name, setName] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    console.log("clicked", e.currentTarget);
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
