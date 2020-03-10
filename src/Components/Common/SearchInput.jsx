import React from "react";
const SearchInput = props => {
  return (
    <div className="col-md-4">
      <div className="card search">
        <div className="card-body">
          <h5 className="card-title">Search</h5>
          <input
            className={props.formType}
            type={props.typeInput}
            placeholder={props.holdValue}
            name={props.inputName}
            label={props.label}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
