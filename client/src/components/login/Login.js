import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../index.css';
import './login.css'
import image from './bg-01.jpg';
import {setLoginWaiting, setLoginSuccess, setLoginFailure, setEmail, setPassword, submit, enableButton} from '../../actions/action.js'
import {Provider} from 'react-redux';
import store from '../../store.js'
import validator from 'validator';



class Login extends Component {

  render() {
    return (
      <div class="limiter">
    		<div class="container-login100">
    			<div class="wrap-login100">
    				<form class="login100-form validate-form" onSubmit={this.onSubmit}>
    					<span class="login100-form-title p-b-43">
    						Login to continue
    					</span>
              <div class="required_message">
                <h5 class="required_text">email and password are required!</h5>
              </div>
    					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
    						<input class="input100" type="text" name="email" required
                       onChange={result => this.props.setEmail(result.target.value)}/>
    						<span class="focus-input100"></span>
    						<span class="label-input100">Email</span>
    					</div>
    					<div class="wrap-input100 validate-input" data-validate="Password is required">
    						<input class="input100" type="password" name="pass" required
                       onChange={result => this.props.setPassword(result.target.value)} />
    						<span class="focus-input100"></span>
    						<span class="label-input100">Password</span>
    					</div>
    					<div class="container-login100-form-btn">
    						<button  type="submit" class="login100-form-btn">
    							Login
    						</button>
    					</div>
    					<div class="login100-form-social flex-c-m">
    						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
    							<i class="fa fa-facebook-f" aria-hidden="true"></i>
    						</a>
    						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
    							<i class="fa fa-twitter" aria-hidden="true"></i>
    						</a>
    					</div>
              <div>
              </div>
    				</form>
    				<div class="login100-more" style={{backgroundImage: "url(" + image + ")"}}>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    email: state.email,
    password: state.password,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
