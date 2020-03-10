import React, { Component } from "react";
import PersonnelList from "./PersonnelList";
import NavBar from "../Common/NavBar";
import SearchPersonnel from "./SearchPersonnel";
class PersonnelLayout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <NavBar/>
        <div className="container-fluid">
          <div className="row">
            <PersonnelList />
            {/* <SearchPersonnel/> */}
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PersonnelLayout;
