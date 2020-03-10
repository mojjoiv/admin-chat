import React, { Component } from "react";
import {Table,Pagination,Button} from "../Common";
// import Image from "../Common/Image";
import {EditTasks,CreateTasks} from "../Tasks";


class TasksList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tasks</h5>
              <div className="table-responsive">
                <React.Fragment>
                  <Button
                    typeButton="button"
                    classButton="btn btn-success btn-sm"
                    dataToggle="modal"
                    dataTarget="#addtaskModal"
                    label="Add Tasks"
                  />

                  <CreateTasks />
                </React.Fragment>

                <Table
                  tableHead={
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone</th>
                      <th>Registration</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th colspan="3">Actions</th>
                    </tr>
                  }
                  tableBody={
                    <React.Fragment>
                      <tr>
                        <td>1</td>
                        <td>Nancy</td>
                        <td>Mwangi</td>
                        <td>+254727337353</td>
                        <td>Self</td>
                        <td>
                          <span class="badge badge-warning">In Progress</span>
                        </td>
                        <td>20th Jun 2019 09:22 am</td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-success btn-sm"
                            dataToggle="modal"
                            dataTarget="#edittaskmodal"
                            label="Edit"
                          />
                          <EditTasks />
                        </td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-danger btn-sm"
                            dataToggle="modal"
                            dataTarget="#deletetaskmodal"
                            label="Delete"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>moses</td>
                        <td>kinyua</td>
                        <td>+254796893219</td>
                        <td>Self</td>
                        <td>
                          <span className="label label-primary">Assigned</span>
                        </td>
                        <td>20th Jun 2019 09:22 am</td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-success btn-sm"
                            dataToggle="modal"
                            dataTarget="#edittaskmodal"
                            label="Edit"
                          />
                          <EditTasks />
                        </td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-danger btn-sm "
                            dataToggle="modal"
                            dataTarget="deletetaskmodal"
                            label="Delete"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Caroline</td>
                        <td>Mukami</td>
                        <td>+254797677910</td>
                        <td>Merchant</td>
                        <td>
                          <span className="badge badge-danger">Deferred</span>
                        </td>
                        <td>12th Mar 2019 12:27 pm</td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-success btn-sm"
                            dataToggle="modal"
                            dataTarget="#edittaskmodal"
                            label="Edit"
                          />
                          <EditTasks />
                        </td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-danger btn-sm"
                            dataToggle="modal"
                            dataTarget="deletetaskmodal"
                            label="Delete"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Boniface</td>
                        <td>Ntwiga</td>
                        <td>+254720721458</td>
                        <td>Self</td>
                        <td>
                          <span class="badge badge-success">Completed</span>
                        </td>
                        <td>12th Mar 2019 12:19 pm</td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-sm btn-success"
                            dataToggle="modal"
                            dataTarget="#edittaskmodal"
                            label="Edit"
                          />
                          <EditTasks />
                        </td>
                        <td>
                          <Button
                            typeButton="button"
                            classButton="btn btn-danger btn-sm"
                            dataToggle="modal"
                            dataTarget="#deletemodal"
                            label="Delete"
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  }
                />
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TasksList;
