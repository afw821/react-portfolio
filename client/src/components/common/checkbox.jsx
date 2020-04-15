import React from "react";

const CheckBox = ({ technologies, label, onChange }) => {
  return (
    <>
      <div className="form-row">
        <div className="col">
          <label>{label}</label>
        </div>
      </div>
      {technologies.map((t) => (
        <div key={t._id} className="form-check form-check-inline">
          <input
            className="form-check-input"
            onChange={onChange}
            type="checkbox"
            id={t._id}
            value={t.name}
          />
          <label className="form-check-label" htmlFor={t._id}>
            {t.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
