import React, { Component } from "react";
import mawingu from "../assets/img/mawingu.png";

const firebase = require("firebase");
class ResetPassword extends Component {
  state = {
    email: null,
    password: null,
    passwordConfirmation: null,
    signupError: ''
  };

  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'email':
        this.setState({ email: event.target.value });
        break;

      case 'password':
        this.setState({ password: event.target.value });
        break;

      case 'passwordConfirmation':
        this.setState({ passwordConfirmation: event.target.value });
        break;

      default:
        break;
    }
  }

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitSignup = (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    if(!this.formIsValid()) {
      this.setState({ signupError: 'Passwords do not match' });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authRes => {
        const userObj = {
          email: authRes.user.email,
          friends: [],
          messages: []
        };
        firebase
          .firestore()
          .collection('users')
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push('/mainLayout');
        }, dbErr => {
          console.log('Failed to add user to the database: ', dbErr);
          this.setState({ signupError: 'Failed to add user' });
        });
    }, authErr => {
      console.log('Failed to create user: ', authErr);
      this.setState({ signupError: 'Failed to add user' });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="mt-5 d-flex justify-content-center">
          <div className="mt-5 p-3 login-container shadow">
            <div class="login-header">
              <img src={mawingu} alt="Mawingu Logo" />
              <h1 class="my-3">Admin Register</h1>
            </div>
            <div className="login-body">
              <form action="#" method="post">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"

                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control is-invalid"
                    placeholder="Password"
                    onChange={(e) => this.userTyping('password', e)} id='signup-password-input'

                  />

                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control is-invalid"
                    placeholder=" Confirm Password"
                    onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'
                  />

                </div>
                {/* <div className="d-flex justify-content-between align-items-center">
              <Link to="/resetPassword" className="text-decoration-none">
                Reset Password
              </Link> */}
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
