/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useState } from "react";
import EditTaskForm from "./EditTaskForm";

const EditTask = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <button onClick={showModal}>Edit</button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <section>
          <div>
            <h3 className=" text-2xl font-medium text-slate-800">
              Update a Task
            </h3>
            <p className=" text-slate-600 mt-2">
              Update your teammate to your team and start working together on
              going done!
            </p>
          </div>
          <div>
            <EditTaskForm task={task} />
          </div>
        </section>
      </Modal>
    </>
  );
};

export default EditTask;
