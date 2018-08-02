import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../index.css';
import './login.css'
import image from '../../assets/kidswalking.jpg';
import {setEmail, setPassword, ChangeTheStateOfSubmitButton, fetchUser, setLoginFailure} from '../../actions'
import validator from 'validator';



class Login extends Component {
  onSubmit = (e) => {
      e.preventDefault();
      this.props.fetchUser(this.props.email, this.props.password);
  }

  componentDidUpdate = () => {
    const email = this.props.email;
    const password = this.props.password;
    if(password && email){
      if(!validator.isEmail(email)){
        this.props.setLoginFailure('The email is not valid');
        this.props.ChangeTheStateOfSubmitButton(true);
      } else if(validator.isEmpty(email)){
        this.props.setLoginFailure('The email is required');
        this.props.ChangeTheStateOfSubmitButton(true);
      } else if(validator.isEmpty(password)){
        this.props.setLoginFailure('The password is required');
        this.props.ChangeTheStateOfSubmitButton(true);
      } else if(!validator.isLength(password, { min: 6})){
        this.props.setLoginFailure('The length of password should be longer than 6 characters');
        this.props.ChangeTheStateOfSubmitButton(true);
      } else {
        this.props.ChangeTheStateOfSubmitButton(false);
        this.props.setLoginFailure(null);
      }
    }
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
                       onChange={result => this.props.setEmail(result.target.value)}/>
    						<span className="focus-input100"></span>
    						<span className="label-input100">Email</span>
    					</div>
    					<div className="wrap-input100 validate-input" data-validate="Password is required">
    						<input className="input100" type="password" name="pass" required
                       onChange={result => this.props.setPassword(result.target.value)} />
    						<span className="focus-input100"></span>
    						<span className="label-input100">Password</span>
    					</div>
    					<div className="container-login100-form-btn">
    						<button  type="submit" className="login100-form-btn" disabled={(this.props.buttonIsDisabled === undefined ? true : this.props.buttonIsDisabled)}>
    							Login
    						</button>
    					</div>
              <div className = 'message'>
                {this.props.message}
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


const mapStateToProps = (state) => {
  return ({
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    submitted: state.loginReducer.submitted,
    buttonIsDisabled: state.loginReducer.buttonIsDisabled,
    message: state.loginReducer.message
  })
}



export default connect(mapStateToProps, {setEmail, setPassword, ChangeTheStateOfSubmitButton, fetchUser, setLoginFailure})(Login);
