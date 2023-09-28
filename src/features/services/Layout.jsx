import Footer from "../../layouts/Footer";
import Navbar from "./components/Navbar";

const Layout = (props) => {
  return (
    <div className="">
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
