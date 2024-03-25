import { Modal } from "antd";
import { useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import AddTaskForm from "./AddTaskForm";

const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  // // Modal Handel
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Task Handel
  const handleSubmit = (data) => {
    setTasks([...tasks, data]);
  };

  console.log("tasks are -----------",tasks);

  return (
    <>
      <button
        onClick={showModal}
        className=" flex items-center gap-1 font-semibold bg-[#FA963A] text-slate-50 rounded-md p-2 shadow-md hover:bg-orange-600"
      >
        New Task
        <CgPlayListAdd />
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <section>
          <div>
            <h3 className=" text-2xl font-medium text-slate-800">
              Create a New Task
            </h3>
            <p className=" text-slate-600 mt-2">
              Add your teammate to your team and start working together on going
              done!
            </p>
          </div>
          <div>
            <AddTaskForm onSubmit={handleSubmit} />
          </div>
        </section>
      </Modal>
    </>
  );
};

export default AddTask;
