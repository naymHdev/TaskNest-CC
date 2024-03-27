/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/features/tasks/tasksSlice.js";
import moment from "moment";
import { usePostTaskMutation } from "../redux/features/api/baseApi";

const AddTaskForm = () => {
  const [postTask] = usePostTaskMutation();
  // console.log("allTask", allTask);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const dispatch = useDispatch()

  const onSubmitHandler = (data) => {
    const time = moment().format("ll");
    const taskInfo = { ...data, time };
    // dispatch(addTask(taskInfo));
    postTask(taskInfo);
  };

  const handleTaskCancel = () => {
    reset();
  };

  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="px-3 pt-6 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            {...register("title", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
          />
          {errors.title && (
            <span className="text-red-500 text-xs">Title is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-xs">
              Description is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team"
          >
            Team
          </label>
          <input
            {...register("team")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="team"
            type="text"
            placeholder="Team"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="assignee"
          >
            Assignee
          </label>
          <input
            {...register("assignee")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assignee"
            type="text"
            placeholder="Assignee"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="priority"
          >
            Priority
          </label>
          <select
            {...register("priority")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="priority"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleTaskCancel}
            className="bg-gray-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-[#FA963A] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
