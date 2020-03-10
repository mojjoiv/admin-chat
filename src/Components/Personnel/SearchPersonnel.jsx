import React, { Component } from "react";
class SearchPersonnel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4">
          <div className="card search">
            <div className="card-body">
              <div className="card-title">
                <h5 className="card-title">Search</h5>
                <form action="#" method="post" accept-charset="utf-8">
                  <div className="form-group">
                    <label className="control-label mb-10">
                      Customer Phone
                    </label>
                    <input
                      type="number"
                      name="customer_phone"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Task Status</label>
                    <select className="form-control select2" name="task_status">
                      <option value="">---Select Personnel Status---</option>
                      <option value="1|Assigned">Assigned</option>
                      <option value="3|Completed">Completed</option>
                      <option value="4|Deferred">Deferred</option>
                      <option value="2|In Progress">In Progress</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10 text-left">
                      Date Assigned
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control datepicker"
                        value="12-02-2012"
                      />
                      <div className="input-group-addon">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="https://mpesa.mawingunetworks.com/customers/close-tasks-search"
                      className="btn btn-default pull-left"
                    >
                      <i className="fa fa-search"></i> Close Search
                    </a>
                    <button type="submit" className="btn btn-warning pull-left">
                      <i class="fa fa-search"></i>
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchPersonnel;
