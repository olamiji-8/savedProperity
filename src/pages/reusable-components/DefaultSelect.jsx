import React from "react";
import AsyncSelect from "react-select";

const DefaultSelect = ({ option, name, holder }) => {
  const handleSelectChange = (e) => {
    console.log(e);
  };

  const loopOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = option.filter((opt) =>
        opt.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("loadOptions", searchValue, filteredOptions);
      callback(filteredOptions);
    }, 1000);
  };

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: "#4b5ffa",
      background: "#ebf0ff",
      padding: ".4rem",
      borderRadius: "5px",
    }),
  };

  return (
    <div className="form-group ">
      <label className="label">
        {name}
        <br />
        <AsyncSelect
          className="new-select"
          options={option}
          loadOptions={loopOptions}
          defaultOptions
          styles={colorStyles}
          placeholder={holder || "--select--"}
          onChange={handleSelectChange}
        />
      </label>
    </div>
  );
};

export default DefaultSelect;
