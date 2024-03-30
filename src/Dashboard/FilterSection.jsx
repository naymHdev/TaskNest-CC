/* eslint-disable react/prop-types */
import { Input, DatePicker } from "antd";
import { IoFilter } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
const { RangePicker } = DatePicker;

const FilterSection = ({
  handelSearch,
  handelAssigneeFilter,
  handelPriorityFilter,
}) => {
  const [value, setValue] = useState(null);

  // Date picker
  const disabledDate = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= 7;
    }
    return false;
  };

  return (
    <div className="grid md:flex justify-between py-8">
      <section>
        <div className="flex items-center gap-5">
          <div className=" flex items-center text-xl gap-1 font-semibold">
            <IoFilter />
            <h3>Filter</h3>
          </div>
          <div className="md:flex gap-5 space-y-3 md:space-y-0 items-center">
            <div>
              <Input
                onChange={handelAssigneeFilter}
                placeholder="Assignee Name"
              />
            </div>
            <div>
              <RangePicker
                value={value}
                disabledDate={disabledDate}
                onChange={setValue}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <div className="flex items-center gap-1 font-semibold">
            <FaFilter />
            <h3 className=" text-xl">Short</h3>
          </div>
          <div>
            <select
              onChange={handelPriorityFilter}
              className="w-full bg-inherit border p-1 rounded-md focus:outline-none focus:border-blue-500"
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
      <section className="flex md:mt-0 mt-5 order-fast md:order-last">
        <div>
          <input
            onChange={handelSearch}
            className="w-full bg-inherit border p-1 rounded-md focus:outline-none focus:border-blue-500"
            type="search"
            name=""
            id=""
            placeholder="Search task"
          />
        </div>
      </section>
    </div>
  );
};

export default FilterSection;
