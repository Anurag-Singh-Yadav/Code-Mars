// InputField.js
import React from "react";

const InputField = ({ heading, type, label, placeHolder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{heading}</label>
      <input className="h-10 p-4"
        type={type}
        required
        label={label}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(label, e.target.value)}
      />
    </div>
  );
};

export default InputField;

