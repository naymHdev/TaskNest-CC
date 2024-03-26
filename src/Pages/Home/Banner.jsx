import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="md:flex flex-grow items-center bg-[#F9FAFE] rounded-md p-1">
        <div className="md:w-1/2">
          <img
            className=""
            src="https://imagizer.imageshack.com/img922/3655/2sc2kF.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-6xl font-bold text-center">
            Be productive with <span className="text-[#F89A68]">Taskmate</span>
          </h1>
          <div className="flex items-center justify-center">
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
