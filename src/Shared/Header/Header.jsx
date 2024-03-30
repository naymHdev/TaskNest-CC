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
          <Link to="/">
            <a className="text-2xl text-[#F89A67] md:px-5 font-bold">
              Task<span className=" text-slate-900">mate</span>
            </a>
          </Link>
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
            <div
              tabIndex={0}
              className="dropdown-content z-[1] flex items-center justify-center mt-3 bg-[#c8c0c0] rounded-md"
            >
              {user && (
                <div
                  onClick={handelLogOut}
                  className="font-bold hover:cursor-pointer px-2 py-2 rounded-md hover:text-slate-50 text-center hover:bg-green-500"
                >
                  Log out
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
