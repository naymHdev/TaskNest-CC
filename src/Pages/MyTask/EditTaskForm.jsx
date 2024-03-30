/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const EditTaskForm = ({ task, onSubmitHandler }) => {
  const { assignee, description, title, priority, team } = task || {};

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelReset = () => {
    reset();
  };

  return (
    <>
      <div className=" w-full">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="px-3 pt-6 mb-4"
        >
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
              defaultValue={title}
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
              defaultValue={description}
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
              defaultValue={team}
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
              defaultValue={assignee}
            />
          </div>
          <div className="grid md:flex items-center justify-between gap-5 ">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                {...register("priority")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={priority}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>{" "}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                {...register("status")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
              >
                <option value="pending">Pending</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="deployed">Deployed</option>
                <option value="deferred">Deferred</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={handelReset}
              className="bg-gray-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset
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
    </>
  );
};

export default EditTaskForm;
