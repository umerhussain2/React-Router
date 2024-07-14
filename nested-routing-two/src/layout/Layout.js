import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
