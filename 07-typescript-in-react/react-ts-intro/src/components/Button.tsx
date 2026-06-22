type ButtonProps = {
  label: string;
  variant: "primary" | "secondary" | "danger";
};

export default function Button({ label, variant }: ButtonProps) {
  const colors = {
    primary: "#2563eb",
    secondary: "#6b7280",
    danger: "#dc2626",
  };

  return (
    <button
      style={{
        backgroundColor: colors[variant],
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
      }}
    >
      {label}
    </button>
  );
}
