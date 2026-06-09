import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <h1>Context</h1>
      <Footer />
    </div>
  );
}
