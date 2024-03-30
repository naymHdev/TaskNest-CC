import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex overflow-hidden">
      <div className=" fixed">
        <Sidebar />
      </div>
      <div className=" w-11/12 ml-[41px] md:ml-[47px] lg:mx-auto py-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
