import { MdDashboardCustomize, MdOutlineHome } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 border-r-2 border-[#D68030]">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        {/* <img src={logo} alt="logo" /> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-slate-700 text-[#D68030] cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-slate-700 text-secondary/40 cursor-pointer transition-all"
          }
        >
          <MdOutlineHome className="h-7 w-7 text-[#D68030]" />
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-slate-700 text-[#D68030] cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-slate-700 text-secondary/40 cursor-pointer transition-all"
          }
        >
          <MdDashboardCustomize className="h-7 w-7 text-[#D68030]" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
