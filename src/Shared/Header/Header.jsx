/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useAuth();

  const handelLogOut = () => {
    logOut()
      .then(() => toast.success("Login Success."))
      .catch(() => toast.error("Log out failed!"));
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="text-2xl text-[#F89A67] md:px-5 font-bold">
            Task<span className=" text-slate-900">mate</span>
          </a>
        </div>

        <div className="navbar-end md:px-5">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0}>
              <Link to="/dashboard">
                <a className="bg-[#F89A67] font-bold text-slate-100 hover:bg-[#AF6928] border-none shadow-md py-3 px-3 rounded-full">
                  Let's Explore
                </a>
              </Link>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] mt-3 menu bg-[#c8c0c0] rounded-md w-28"
            >
              {user && (
                <button
                  onClick={handelLogOut}
                  className=" font-bold hover:cursor-pointer p-1 hover:text-green-500"
                >
                  Log out
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
