import React, { Component } from "react";
import {SelectField} from '../Common';

class SearchTasks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4">
          <div className="card search">
            <div className="card-body">
              <h5 className="card-title">Search</h5>

              <form action="#" method="post" accept-charset="utf-8">
                <div className="form-group">
                  <label className="control-label mb-10">Customer Phone</label>
                  <input
                    type="number"
                    name="customer_phone"
                    className="form-control"
                  />
                </div>
               
                <SelectField
                title="Tasks Status"
                  options={
                    <React.Fragment>
                      <option value="">---Select Task Status---</option>
                      <option value="1|Assigned">Assigned</option>
                      <option value="3|Completed">Completed</option>
                      <option value="4|Deferred">Deferred</option>
                      <option value="2|In Progress">In Progress</option>
                    </React.Fragment>
                  }
                />
                <div className="form-group">
                  <label className="control-label mb-10 text-left">
                    Date Assigned
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="form-control datepicker"
                      className="12-02-2012"
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
      </React.Fragment>
    );
  }
}

export default SearchTasks;
