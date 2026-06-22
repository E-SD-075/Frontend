import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "6px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      {children}
    </div>
  );
}
