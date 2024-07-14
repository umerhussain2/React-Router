// Components that we want show  to all pages
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

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
