import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <div className="main-container min-h-screen">
            { children }
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
