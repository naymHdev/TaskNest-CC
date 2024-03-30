/* eslint-disable react/prop-types */
import { PiDotsThreeCircleVerticalDuotone } from "react-icons/pi";
import EditTask from "./EditTask";
import moment from "moment";
import PrivateAxios from "../../Hooks/PrivateAxios";
import toast from "react-hot-toast";
import useTasks from "../../Hooks/useTasks";

const TaskCard = ({ task, handleTaskDelete }) => {
  const { assignee, description, title, time, priority, _id, status } =
    task || {};

  const [, refetch] = useTasks();

  // Handel update task
  const onSubmitHandler = (data) => {
    const assignee = data.assignee;
    const status = data.status;
    const title = data.title;
    const description = data.description;
    const priority = data.priority;
    const team = data.team;
    const time = moment().format("ll");

    const updateInfo = {
      assignee,
      status,
      title,
      description,
      priority,
      team,
      time,
    };

    try {
      PrivateAxios.put(`/taskMate/tasks/${_id}`, updateInfo)
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success("Task Updated Complete");
            refetch();
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
  /* 
Pending
In Progress
Completed
Deployed
Deferred

*/
  return (
    <>
      <section
        className={`mt-5 
      ${status == "pending" && "bg-[#EEEEEE]"}
      ${status == "inProgress" && "bg-[#F8EDC8]"}
      ${status == "completed" && "bg-[#C8F8CD]"}
      ${status == "deployed" && "bg-[#C3C7FB]"}
      ${status == "deferred" && "bg-[#C8EBF8]"}
       rounded-xl p-2 shadow-md`}
      >
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
                <EditTask task={task} onSubmitHandler={onSubmitHandler} />
              </p>
              <hr className="mt-[1px] mb-[1px]" />
              <p
                onClick={() => handleTaskDelete(_id)}
                className=" font-bold hover:cursor-pointer p-2 hover:text-red-500"
              >
                Delete
              </p>
            </ul>
          </div>
        </div>
        <div className="mt-3 space-y-3">
          <h3 className=" text-xl font-medium text-slate-800">{title}</h3>
          <p className=" text-slate-700">{description}</p>
        </div>
        <div className=" flex items-center justify-between mt-3">
          <p
            className={`font-bold text-sm ${
              priority === "high" && "text-green-700"
            } ${priority === "medium" && "text-yellow-700"} ${
              priority === "low" && "text-red-700"
            }`}
          >
            {priority.toUpperCase()}
          </p>
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
