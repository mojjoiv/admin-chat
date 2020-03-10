import React, { Component } from "react";
import ModalInputFields from "../Common/ModalInputFields";
import Button from "../Common/Button";

class CreateTasks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="addtaskModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-notify modal-info" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title w-100" id="exampleModalLabel">
                  Add Tasks{" "}
                </h5>
                {/* <div className="d-flex justify-content-between align-items-end mb-4">
                  <label className="col-sm-2 pl-n15">Name:</label>
                </div> */}
                <button
                  type="button"
                  classbutton="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form noValidate>
                <div className="modal-body mx-3">
                  <div className="container">
                  <ModalInputFields
                    InputType="text"
                    onChange={this.onChange}
                    placeHolder="First Name"
                    label="First Name"
                  />
                  <ModalInputFields
                    InputType="text"
                    onChange={this.onChange}
                    label=" Last Name"
                    placeHolder=" Last Name"
                  />

                  <ModalInputFields
                    InputType="number"
                    onChange={this.onChange}
                    label="Phone Number"
                    placeHolder="Phone Number"
                  />
                  <div className="form-group">
                    <label htmlFor="status">Personnel Status</label>
                    <select
                      name="status"
                      onChange={this.onChange}
                      style={{ fontSize: "14px" }}
                    >
                      <option value="" disabled>
                        --Select Personnel Status--
                      </option>
                      <option value="1" style={{ fontStyle: "normal" }}>
                        Active
                      </option>
                      <option value="0" style={{ fontStyle: "normal" }}>
                        Inactive
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <span
                      className="input-group-addon"
                      style={{ marginRight: "3px" }}
                    >
                      <i className="fas fa-user-cog" />
                    </span>
                    <label htmlFor="personnel_type_id">Personnel Type</label>
                    <select
                      name="personnel_type_id"
                      onChange={this.onChange}
                      style={{ fontSize: "14px" }}
                    >
                      <option value="" disabled className="selectPlaceholder">
                        --Select Personnel Type--
                      </option>
                    </select>
                  </div>
                </div>

                <div className="modal-footer">
                  <Button
                    typeButton="button"
                    classbutton="btn btn-sm btn-outline-danger"
                    dataDismiss="modal"
                    label="Close"
                  />

                  <Button
                    typeButton="button"
                    onClick={this.submitNewPersonnel}
                    classbutton="btn btn-sm btn-primary"
                    label="Add Task"
                  />
                </div>
                  </div>
                  
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateTasks;
