import React from "react";
const ModalInputFields = props => {
  return (
    <div className="modal-body mx-3">
      <div className="container-fluid">
        <div className="form-group">
          <span className="input-group-addon" style={{ marginRight: "3px" }}>
            <i className="fab fa-accessible-icon" />
          </span>
          
            <input
              label={props.label}
              placeholder={props.placeHolder}
              type={props.InputType}
            />
          
          
        </div>
      </div>
    </div>
  );
};

export default ModalInputFields;
