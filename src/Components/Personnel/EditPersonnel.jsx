import React, { Component } from "react";
class EditPersonnel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="editpersonnelmodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Nancy Mwangi
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="#" method="post">
                <input type="hidden" name="task_id" value="21962" />
                <input type="hidden" name="task_status_id" value="3" />
                <div className="modal-body">
                  <p>
                    <strong>Customer Phone:</strong> +254382742637
                  </p>
                  <label>Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender1"
                      value="Male"
                    />
                    <label className="form-check-label" for="gender1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value="option2"
                    />
                    <label className="form-check-label" for="gender2">
                      Female
                    </label>
                  </div>
                  <div className="form-group">
                    <label for="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      id="location"
                      placeholder="Location"
                    />
                  </div>
                  <div className="form-group">
                    <label for="age">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      id="age"
                      placeholder="Age"
                    />
                  </div>
                  <label>Customer Education</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      name="access_code"
                      id="access_code1"
                    />
                    <label className="form-check-label" for="access_code1">
                      Access Code
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      name="splash_page"
                      id="splash_page1"
                    />
                    <label className="form-check-label" for="splash_page1">
                      Splash Page
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      name="autoplay"
                      id="autoplay1"
                    />
                    <label className="form-check-label" for="autoplay1">
                      Turn off autoplay
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      name="mpesa"
                      id="mpesa1"
                    />
                    <label className="form-check-label" for="mpesa1">
                      M-Pesa training
                    </label>
                  </div>
                  <div className="form-group">
                    <label for="comments">Comments</label>
                    <textarea
                      className="form-control"
                      name="comments"
                      id="comments"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditPersonnel;
