import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Layout = () => {
  return (
    <div className=" w-full">
      <Header />
      <div className=" w-11/12 mx-auto py-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
