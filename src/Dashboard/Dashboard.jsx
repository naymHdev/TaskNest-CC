import MyTask from "../Pages/MyTask/MyTask";
import FilterSection from "./FilterSection";
import AddTask from "./AddTask";
import useTasks from "../Hooks/useTasks";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isTasks, refetch] = useTasks();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(isTasks);
  }, [isTasks]);

  // Search handel
  const handelSearch = (e) => {
    const search = isTasks?.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(search);
  };

  // Filter with assignee name
  const handelAssigneeFilter = (e) => {
    const search = isTasks?.filter((item) =>
      item.assignee.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(search);
  };

  // Filter with priority
  const handelPriorityFilter = (e) => {
    const search = isTasks?.filter((item) =>
      item.priority.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(search);
  };

  // Filter with date
  const handelDateFilter = (e) => {
    const search = isTasks?.filter((item) =>
      item.time.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(search);
  };

  return (
    <>
      <div className="p-3">
        <h1 className=" text-4xl font-bold text-[#FA963A]">
          Task <span className=" text-slate-800">Board</span>
        </h1>
      </div>
      <section>
        <FilterSection
          handelSearch={handelSearch}
          handelAssigneeFilter={handelAssigneeFilter}
          handelPriorityFilter={handelPriorityFilter}
          handelDateFilter={handelDateFilter}
        />
      </section>
      <div className="flex justify-end py-1 px-2">
        <AddTask />
      </div>
      <section>
        <MyTask records={records} refetch={refetch} />
      </section>
    </>
  );
};

export default Dashboard;
