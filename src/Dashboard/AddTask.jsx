import { Modal } from "antd";
import { useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";

const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <button
        onClick={showModal}
        className=" flex items-center gap-1 font-semibold bg-[#FA963A] text-slate-50 rounded-md p-2 shadow-md hover:bg-orange-600"
      >
        New Task
        <CgPlayListAdd />
      </button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AddTask;
