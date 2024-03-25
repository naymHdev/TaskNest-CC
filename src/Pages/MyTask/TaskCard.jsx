import { LuArrowUpRightFromCircle } from "react-icons/lu";

const TaskCard = () => {
  return (
    <>
      <section className={`mt-5 bg-[#EEEEEE] rounded-xl p-2 shadow-md`}>
        <div className=" flex items-center justify-between px-2 font-semibold">
          <p>18 Feb 2024</p>{" "}
          <LuArrowUpRightFromCircle className=" text-xl hover:cursor-pointer" />
        </div>
        <h3 className=" text-xl font-medium mt-5">
          Testing and user feedback for dribble short{" "}
        </h3>
        <div className=" flex items-center justify-between px-1 mt-5">
          <p className=" text-sm font-medium">09.00AM - 10.00PM</p>
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskCard;
