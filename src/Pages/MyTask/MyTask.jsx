import useTasks from "../../Hooks/useTasks";
import TaskCard from "./TaskCard";

const MyTask = () => {
  const [isTasks] = useTasks();

  const pendingTasks = isTasks?.filter((task) => task.status === "pending");
  const inProgressTasks = isTasks?.filter(
    (task) => task.status === "inProgress"
  );
  const completedTasks = isTasks?.filter((task) => task.status === "completed");
  const deployedTasks = isTasks?.filter((task) => task.status === "deployed");
  const deferredTasks = isTasks?.filter((task) => task.status === "deferred");

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
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#F8EDC8] py-3">
            <h3 className=" text-xl font-medium text-center">In Progress</h3>
          </div>
          <div>
            {inProgressTasks?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8F8CD] py-3">
            <h3 className=" text-xl font-medium text-center">Completed</h3>
          </div>
          <div>
            {completedTasks?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#c3c7fb] py-3">
            <h3 className=" text-xl font-medium text-center">Deployed</h3>
          </div>
          <div>
            {deployedTasks?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8EBF8] py-3">
            <h3 className=" text-xl font-medium text-center">Deferred</h3>
          </div>
          <div>
            {deferredTasks?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTask;
