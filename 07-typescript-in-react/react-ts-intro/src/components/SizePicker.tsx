import { useState } from "react";

export default function SizePicker() {
  const [size, setSize] = useState<Size>("md");

  type Size = "sm" | "md" | "lg";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value === "sm" || value === "md" || value === "lg") {
      setSize(value);
    }
  }

  return (
    <>
      <select value={size} onChange={handleChange}>
        <option value="sm">small</option>
        <option value="md">medium</option>
        <option value="lg">large</option>
      </select>
    </>
  );
}
