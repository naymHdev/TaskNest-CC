import { Input, Select } from "antd";
import Search from "antd/es/input/Search";
import { IoFilter } from "react-icons/io5";
import { DatePicker } from "antd";

const FilterSection = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

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
      </section>
      <section>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 300,
          }}
        />
      </section>
    </div>
  );
};

export default FilterSection;
