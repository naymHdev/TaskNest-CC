/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import PrivateAxios from "../../Hooks/PrivateAxios";
import TaskCard from "./TaskCard";

const MyTask = ({ records, refetch }) => {

  // Data filtering
  const pendingTasks =
    records && records?.filter((task) => task.status === "pending");
  const inProgressTasks =
    records && records?.filter((task) => task.status === "inProgress");
  const completedTasks =
    records && records?.filter((task) => task.status === "completed");
  const deployedTasks =
    records && records?.filter((task) => task.status === "deployed");
  const deferredTasks =
    records && records?.filter((task) => task.status === "deferred");

  // Task deleting handel
  const handleTaskDelete = (id) => {
    PrivateAxios.delete(`/taskMate/tasks/${id}`)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Task Deleted!");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-[#F9F9F9] p-2 rounded-md">
        <div>
          <div className=" rounded-md shadow-md bg-[#EEEEEE] py-3">
            <h3 className=" text-xl font-medium text-center">
              Pending ({pendingTasks?.length})
            </h3>
          </div>
          <div>
            {pendingTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#F8EDC8] py-3">
            <h3 className=" text-xl font-medium text-center">
              In Progress ({inProgressTasks?.length})
            </h3>
          </div>
          <div>
            {inProgressTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8F8CD] py-3">
            <h3 className=" text-xl font-medium text-center">
              Completed ({completedTasks?.length})
            </h3>
          </div>
          <div>
            {completedTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#c3c7fb] py-3">
            <h3 className=" text-xl font-medium text-center">
              Deployed ({deployedTasks?.length})
            </h3>
          </div>
          <div>
            {deployedTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8EBF8] py-3">
            <h3 className=" text-xl font-medium text-center">
              Deferred ({deferredTasks?.length})
            </h3>
          </div>
          <div>
            {deferredTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTask;
