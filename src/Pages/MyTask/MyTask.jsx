import toast from "react-hot-toast";
import PrivateAxios from "../../Hooks/PrivateAxios";
import useTasks from "../../Hooks/useTasks";
import TaskCard from "./TaskCard";
import useUser from "../../Hooks/useUser";
import moment from "moment";

const MyTask = () => {
  const [isTasks, refetch] = useTasks();
  const { isUser } = useUser();

  const pendingTasks = isTasks?.filter((task) => task.status === "pending");
  const inProgressTasks = isTasks?.filter(
    (task) => task.status === "inProgress"
  );
  const completedTasks = isTasks?.filter((task) => task.status === "completed");
  const deployedTasks = isTasks?.filter((task) => task.status === "deployed");
  const deferredTasks = isTasks?.filter((task) => task.status === "deferred");

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
      PrivateAxios.put(`/taskMate/tasks/${isUser._id}`, updateInfo)
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
                onSubmitHandler={onSubmitHandler}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#F8EDC8] py-3">
            <h3 className=" text-xl font-medium text-center">In Progress</h3>
          </div>
          <div>
            {inProgressTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
                onSubmitHandler={onSubmitHandler}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8F8CD] py-3">
            <h3 className=" text-xl font-medium text-center">Completed</h3>
          </div>
          <div>
            {completedTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
                onSubmitHandler={onSubmitHandler}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#c3c7fb] py-3">
            <h3 className=" text-xl font-medium text-center">Deployed</h3>
          </div>
          <div>
            {deployedTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
                onSubmitHandler={onSubmitHandler}
              />
            ))}
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8EBF8] py-3">
            <h3 className=" text-xl font-medium text-center">Deferred</h3>
          </div>
          <div>
            {deferredTasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleTaskDelete={handleTaskDelete}
                onSubmitHandler={onSubmitHandler}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTask;
