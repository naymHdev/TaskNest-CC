import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="md:flex flex-grow items-center">
        <div className="md:w-1/2">
          <img
            className=""
            src="https://imagizer.imageshack.com/img922/3655/2sc2kF.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-6xl font-bold text-right">
            Be productive with <span className="text-[#F89A68]">Taskmate</span>
          </h1>
          <div className="flex items-center justify-end">
            <Link to="/dashboard">
              <button className="bg-[#F89A68] hover:bg-orange-600 text-slate-50 text-xl font-bold border rounded-full px-4 py-2">
                To begin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
