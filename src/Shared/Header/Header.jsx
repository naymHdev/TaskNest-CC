import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="text-2xl text-[#F89A67] md:px-5 font-bold">
            Task<span className=" text-slate-900">mate</span>
          </a>
        </div>

        <div className="navbar-end">
          <Link to="/dashboard">
            <a className="btn bg-[#F89A67] text-slate-100 hover:bg-[#AF6928] border-none shadow-md">
              My Task
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
