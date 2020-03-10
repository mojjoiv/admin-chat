import React from "react";
const Button = props => {
  return (
    <React.Fragment>
      <button
        type={props.typeButton}
        className={props.classButton}
        data-toggle={props.dataToggle}
        data-target={props.dataTarget}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </React.Fragment>
  );
};

export default Button;
