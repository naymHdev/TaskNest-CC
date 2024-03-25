import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className=" w-11/12 mx-auto py-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
