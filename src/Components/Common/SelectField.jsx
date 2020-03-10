import React from "react";
const SelectField = ({ title, options }) => {
  return (
    <div className="form-group">
      <label className="control-label mb-10">{title}</label>
      <select className="form-control select2" name="task_status">
        {options}
      </select>
    </div>
  );
};

export default SelectField;
