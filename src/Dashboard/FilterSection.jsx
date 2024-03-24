import { Input, Select } from "antd";
import { IoFilter } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { DatePicker } from "antd";
import AddTask from "./AddTask";

const FilterSection = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  // Date picker
  const onChange = (date, dateString) => {
    console.log("Date picker", date, dateString);
  };

  return (
    <div className=" flex justify-between py-8">
      <section>
        <div className=" flex items-center gap-5">
          <div className=" flex items-center text-xl gap-1 font-semibold">
            <IoFilter />
            <h3>Filter</h3>
          </div>
          <div className="md:flex gap-5 items-center">
            <div>
              <Input placeholder="Assignee Name" />
            </div>
            <div>
              <Select
                defaultValue="Priority"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "high",
                    label: "High",
                  },
                  {
                    value: "medium",
                    label: "Medium",
                  },
                  {
                    value: "low",
                    label: "Low",
                  },
                ]}
              />
            </div>
            <div>
              <DatePicker
                format={{
                  format: "YYYY-MM-DD",
                  type: "mask",
                }}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <div className=" flex items-center gap-1 font-semibold">
            <FaFilter />
            <h3 className=" text-xl">Short</h3>
          </div>
          <div>
            <Select
              defaultValue="Priority"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "high",
                  label: "High",
                },
                {
                  value: "medium",
                  label: "Medium",
                },
                {
                  value: "low",
                  label: "Low",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <AddTask />
        </div>
      </section>
    </div>
  );
};

export default FilterSection;
