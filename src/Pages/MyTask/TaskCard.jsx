/* eslint-disable react/prop-types */
import { PiDotsThreeCircleVerticalDuotone } from "react-icons/pi";

const TaskCard = ({ task }) => {
  // console.log(task);

  const { assignee, description, title, time, priority } = task || {};

  return (
    <>
      <section className={`mt-5 bg-[#EEEEEE] rounded-xl p-2 shadow-md`}>
        <div className=" flex items-center justify-between font-semibold">
          <p className=" text-sm">{time}</p>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0}>
              <PiDotsThreeCircleVerticalDuotone className=" text-slate-900 text-2xl hover:cursor-pointer" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu bg-[#F9F9F9] rounded-md w-28"
            >
              <p className=" font-bold hover:cursor-pointer p-2 hover:text-green-500">
                Edit
              </p>
              <hr className="mt-[1px] mb-[1px]" />
              <p className=" font-bold hover:cursor-pointer p-2 hover:text-red-500">
                Delete
              </p>
            </ul>
          </div>
        </div>
        <div className="mt-3 space-y-3">
          <h3 className=" text-xl font-medium text-slate-800">{title}</h3>
          <p className=" text-slate-700">{description}</p>
        </div>
        <div className=" flex items-center justify-between mt-5">
          <p className=" font-semibold">{priority.toUpperCase()}</p>
          <div className="avatar tooltip" data-tip={assignee}>
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskCard;
