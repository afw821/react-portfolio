import React from "react";

const TextArea = ({ value, onChange, name, label, type, error, rows }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
        rows={rows}
        className="form-control"
      ></textarea>
    </div>
  );
};

export default TextArea;
