import TaskCard from "./TaskCard";

const MyTask = () => {
  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-[#F9F9F9] p-2 rounded-md">
        <div>
          <div className=" rounded-md shadow-md bg-[#EEEEEE] py-3">
            <h3 className=" text-xl font-medium text-center">Pending</h3>
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
