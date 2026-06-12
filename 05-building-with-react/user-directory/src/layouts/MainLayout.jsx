import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
