import React, { Component } from "react";
import { H1, InputFields } from "../Common";
import mawingu from "../assets/img/mawingu.png";
import Button from '@material-ui/core/Button';

const firebase = require("firebase");

class Login extends Component {
state = {
  email: null,
      password: null,
      serverError: false
}

userTyping = (whichInput, event) => {
  switch (whichInput) {
    case 'email':
      this.setState({ email: event.target.value });
      break;

    case 'password':
      this.setState({ password: event.target.value });
      break;

    default:
      break;
  }
}

submitLogin = async (e) => {
  e.preventDefault(); 

  await firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      this.props.history.push('/PersonnelLayout');
    }, err => {
      this.setState({ serverError: true });
      console.log('Error logging in: ', err);
    });
};

  render() {

        const { classes } = this.props;

    return (
      <div class="mt-5 d-flex justify-content-center">
        <div class="mt-5 p-3 login-container shadow">
          <div class="login-header">
            <img src={mawingu} />
            <H1 className="my-3" title="Admin Login" />
          </div>
          <div class="login-body">
            <form onSubmit={(e) => this.submitLogin(e)}>
              <InputFields
                formType="form-control"
                forIcon="fa fa-envelope"
                typeInput="text"
                holdValue="email"
                autocomplete='email'
                autoFocus onChange={(e) => this.userTyping('email', e)} 
                id='login-email-input'
               
              />
              <InputFields
                formType="form-control is-invalid"
                forIcon="fa fa-lock"
                typeInput="password"
                holdValue="password"
                autocomplete="current-password"
                onChange={(e) => this.userTyping('password', e)} 
                id='login-password-input'

              />

               <Button type='submit' 
               fullWidth variant='contained' 
               color='primary' 
              //  className={classes.submit}
               >
                 Log In</Button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
