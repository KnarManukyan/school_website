import React, { Component } from 'react';
import '../../../index.css';
import './login.css';
import image from './kidswalking.jpg';
import validator from 'validator';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitButtonEnabled: false,
      validationMessage: '',
    }
  }

  changeInputValue(event, inputName) {
    this.setState({
      [inputName]: event.target.value,
    }, () => {
      this.validateInputs();
      if(this.props.message){this.props.setLoginFailure(null)}
    })
  }

  validateInputs() {
    const {email, password} = this.state;
    if(password && email){
      let validationMessage = '';
      let submitButtonEnabled = false;
      if(!validator.isEmail(email)){
        validationMessage = 'The email is not valid';
        submitButtonEnabled = true;
      } else if(validator.isEmpty(email)){
        validationMessage = 'The email is required';
        submitButtonEnabled = true;
      } else if(validator.isEmpty(password)){
        validationMessage = 'The password is required';
        submitButtonEnabled = true;
      } else if(!validator.isLength(password, { min: 6})){
        validationMessage = 'The length of password should be longer than 6 characters';
        submitButtonEnabled = true;
      }
      this.setState({submitButtonEnabled, validationMessage});
    } else {
      this.setState({submitButtonEnabled : false, validationMessage: ''});
    }
}

  onSubmit = (e) => {
      e.preventDefault();
      this.props.fetchUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="limiter">
    		<div className="container-login100">
    			<div className="wrap-login100">
    				<form className="login100-form validate-form" onSubmit={this.onSubmit}>
    					<span className="login100-form-title p-b-43">
    						Login to continue
    					</span>
              <div className="required_message">
              </div>
    					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
    						<input className="input100" type="text" name="email" required
                       onChange={event => this.changeInputValue(event, 'email')}/>
    						<span className="focus-input100"></span>
    						<span className="label-input100">Email</span>
    					</div>
    					<div className="wrap-input100 validate-input" data-validate="Password is required">
    						<input className="input100" type="password" name="pass" required
                       onChange={event => this.changeInputValue(event, 'password')}/>
    						<span className="focus-input100"></span>
    						<span className="label-input100">Password</span>
    					</div>
    					<div className="container-login100-form-btn">
    						<button  type="submit" className="login100-form-btn" disabled={this.state.submitButtonEnabled}>
    							Login
    						</button>
    					</div>
              <div className = 'message'>
                {(this.state.validationMessage ? this.state.validationMessage : this.props.message)}
              </div>
            </form>
            <div className="login100-more" style={{backgroundImage: "url(" + image + ")"}}>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LoginForm;
