import Search from "antd/es/input/Search";

const FilterSection = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className=" flex">
      <section></section>
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
