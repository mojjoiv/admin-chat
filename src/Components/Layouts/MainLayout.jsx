import React, { Component } from "react";
import TasksLayout from "../Tasks/TasksLayout";

import { Redirect } from "react-router-dom";

class MainLayout extends Component {
  constructor(props) {
      super(props)
      // const token = window.localStorage.getItem("token")

      // let loggedIn = true
      // if(token == null){
      //     loggedIn = false
      // }

      // this.state = {
      //     loggedIn
      // }
  }
  render() {
      //if password is wrong no action
      // if(this.state.loggedIn === false){
      //     return <Redirect to="/"/>
      // }
    return (
      <React.Fragment>
        <TasksLayout />
      </React.Fragment>
    );
  }
}

export default MainLayout;
