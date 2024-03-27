import TaskCard from "./TaskCard";
import { useGetTasksQuery } from "../../redux/features/api/baseApi";

const MyTask = () => {
  const { data: tasks } = useGetTasksQuery();
  console.log(tasks);

  const pendingTasks = tasks?.filter((item) => item.status === "pending");
  const inProgressTasks = tasks?.filter((item) => item.status === "inProgress");
  const completedTasks = tasks?.filter((item) => item.status === "completed");
  const deployedTasks = tasks?.filter((item) => item.status === "deployed");
  const deferredTasks = tasks?.filter((item) => item.status === "deferred");

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-[#F9F9F9] p-2 rounded-md">
        <div>
          <div className=" rounded-md shadow-md bg-[#EEEEEE] py-3">
            <h3 className=" text-xl font-medium text-center">Pending</h3>
          </div>
          <div>
            {pendingTasks?.map((item) => (
              <TaskCard key={item._id} task={item} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#F8EDC8] py-3">
            <h3 className=" text-xl font-medium text-center">In Progress</h3>
          </div>
          <div>
            {inProgressTasks?.map((item) => (
              <TaskCard key={item._id} task={item} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8F8CD] py-3">
            <h3 className=" text-xl font-medium text-center">Completed</h3>
          </div>
          <div>
            {completedTasks?.map((item) => (
              <TaskCard key={item._id} task={item} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#c3c7fb] py-3">
            <h3 className=" text-xl font-medium text-center">Deployed</h3>
          </div>
          <div>
            {deployedTasks?.map((item) => (
              <TaskCard key={item._id} task={item} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8EBF8] py-3">
            <h3 className=" text-xl font-medium text-center">Deferred</h3>
          </div>
          <div>
            {deferredTasks?.map((item) => (
              <TaskCard key={item._id} task={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTask;
