/* eslint-disable react/prop-types */
import { Input } from "antd";
import { IoFilter } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

const FilterSection = ({
  handelAssigneeFilter,
  handelPriorityFilter,
  handelDateFilter,
}) => {
  return (
    <div className="flex justify-between py-5 px-2">
      <section>
        <div className="flex items-center gap-1 md:gap-5">
          <div className=" flex items-center md:text-xl gap-1 font-semibold">
            <IoFilter />
            <h3>Filter</h3>
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <div>
              <Input
                onChange={handelAssigneeFilter}
                placeholder="Assignee Name"
              />
            </div>
            <div>
              <input
                onChange={handelDateFilter}
                className="w-full bg-inherit border px-[6px] py-[2px] rounded-md focus:outline-none focus:border-blue-500"
                type="date"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-1 md:gap-5">
          <div className="flex items-center gap-1 font-semibold">
            <FaFilter />
            <h3 className="md:text-xl">Short</h3>
          </div>
          <div>
            <select
              onChange={handelPriorityFilter}
              className="w-full bg-inherit border p-[5px] rounded-md focus:outline-none focus:border-blue-500"
              name="priority"
              id="priority"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </section>
      <section className="flex md:mt-0 mt-5 order-fast md:order-last"></section>
    </div>
  );
};

export default FilterSection;
