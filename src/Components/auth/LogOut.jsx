import React, { Component } from "react";
import {H1, Button,Logo} from "../Common";
import { Link } from "react-router-dom";
const firebase = require("firebase");

class LogOut extends Component {
  state={
   
  }
  signOut = () => firebase.auth().signOut();
  render() {
    return (
      <React.Fragment>
      <div className="mt-5 d-flex justify-content-center">
<div className="mt-5 p-3 login-container shadow">
 <div className="login-header">
   <Logo/>
   <H1 className="my-3" title=" Log in Again ?" />
 </div>
 <div className="login-body">
   <form onSubmit={this.submitForm}>
     <Link to="/"> <Button typeButton="Submit" classButton="btn btn-info"
     label= "Login"/></Link>

   </form>
 </div>
</div>
</div>

   </React.Fragment>
    );
  }
}

export default LogOut;
