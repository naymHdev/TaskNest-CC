import MyTask from "../Pages/MyTask/MyTask";
import FilterSection from "./FilterSection";
import AddTask from "./AddTask";

const Dashboard = () => {
  return (
    <>
      <div className="p-3">
        <h1 className=" text-4xl font-bold text-[#FA963A]">
          Task <span className=" text-slate-800">Board</span>
        </h1>
      </div>
      <section>
        <FilterSection />
      </section>
      <div className="flex justify-end py-5 px-3">
        <AddTask />
      </div>
      <section>
        <MyTask />
      </section>
    </>
  );
};

export default Dashboard;
