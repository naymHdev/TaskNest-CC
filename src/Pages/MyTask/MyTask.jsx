import TaskCard from "./TaskCard";

const MyTask = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-[#F9F9F9] p-2 rounded-md">
        <div>
          <div className=" rounded-md shadow-md bg-[#EEEEEE] py-3">
            <h3 className=" text-xl font-medium text-center">Pending</h3>
          </div>
          <div>
            <TaskCard />
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#F8EDC8] py-3">
            <h3 className=" text-xl font-medium text-center">In Progress</h3>
          </div>
          <div>
            <TaskCard />
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8F8CD] py-3">
            <h3 className=" text-xl font-medium text-center">Completed</h3>
          </div>
          <div>
            <TaskCard />
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#c3c7fb] py-3">
            <h3 className=" text-xl font-medium text-center">Deployed</h3>
          </div>
          <div>
            <TaskCard />
          </div>
        </div>
        <div>
          <div className=" rounded-md shadow-md bg-[#C8EBF8] py-3">
            <h3 className=" text-xl font-medium text-center">Deferred</h3>
          </div>
          <div>
            <TaskCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTask;
