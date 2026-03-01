import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust path if needed
import Footer from "../components/Footer"; // adjust path if needed
import backgroundimg from "../assets/background.png";
import ScrollToTop from "../components/ScrollToTop";


const Layout = () => {
  return (


    <div className="relative bg-repeat bg-cover  bg-[center_-3000px]   "
      style={{ backgroundImage: `url(${backgroundimg})` }}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
