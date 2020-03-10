import React from "react";
const Table = ({ tableHead, tableBody }) => {
  return (
    <React.Fragment>
      <table className="table table-bordered table-striped table-condensed">
    
        <thead>{tableHead}</thead>
        <tbody>{tableBody}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
