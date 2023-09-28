import React from "react";

const FormInput = ({ onchange, value, onblur }) => {
  return (
    <>
      <input
        onChange={onchange}
        type="text"
        name="emailOrPhone"
        id="emailOrPhone"
        placeholder="E-mail/ Phone Number"
        value={value}
        onBlur={onblur}
      />
    </>
  );
};

export default FormInput;
