import MyTask from "../Pages/MyTask/MyTask";
import FilterSection from "./FilterSection";

const Dashboard = () => {
  return (
    <>
      <section>
        <FilterSection />
      </section>
      <section>
        <MyTask />
      </section>
    </>
  );
};

export default Dashboard;
