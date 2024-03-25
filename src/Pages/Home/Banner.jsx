import { Link } from "react-router-dom";
import banner from "../../assets/task_management_banner_image.png";

const Banner = () => {
  return (
    <>
      <div className="md:flex items-center justify-evenly md:w-11/12 mx-auto">
        <div className="md:order-last order-first">
          <img
            className=" w-full"
            src={banner}
            alt="Task Management Banner Image"
          />
        </div>
        <div>
          <h1 className=" text-5xl font-bold">
            Be productive with <span className="text-[#F89A68]">Taskmate</span>
          </h1>
          <div className=" mt-6">
            <Link to="/dashboard">
              <button className="bg-[#F89A68] hover:bg-orange-600 text-slate-50 font-bold rounded-md p-2">
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
