import { Outlet } from "react-router-dom";
// Components we to show want to all pages
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-pages-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
