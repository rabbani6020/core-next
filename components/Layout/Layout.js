import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 text-black">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
