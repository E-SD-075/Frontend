import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { activeTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: activeTheme.bg,
        borderRadius: "8px",
        color: activeTheme.text,
        height: "45px",
        padding: "10px",
      }}
    >
      <p>Footer. Copyright.</p>
    </div>
  );
}
