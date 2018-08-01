import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../index.css';
import './login.css'
import image from './bg-01.jpg';
import {setLoginWaiting, setLoginSuccess, setLoginError} from '../../actions/action.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }
  onSubmit = (e)=> {
      e.preventDefault();
      let { email, password } = this.state;
      this.login(email, password);
      this.setState({
            email: '',
            password: ''
          });
  }
  login = (email, password) => {
    debugger;
    this.props.setLoginWaiting();
    (this.check(email, password) ? this.props.setLoginSuccess() : this.props.setLoginError());
    alert(this.props.loginStatus);
  }
  check = (email, password) =>{
    (email === 'admin@admin.com' && password === 'null' ? true : false);
  }

  render() {
    let {email, password} = this.state;
    return (
      <div class="limiter">
    		<div class="container-login100">
    			<div class="wrap-login100">
    				<form class="login100-form validate-form" onSubmit={this.onSubmit}>
    					<span class="login100-form-title p-b-43">
    						Login to continue
    					</span>
    					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
    						<input class="input100" type="text" name="email" required
                       onChange={result => this.setState({email: result.target.value})}/>
    						<span class="focus-input100"></span>
    						<span class="label-input100">Email</span>
    					</div>
    					<div class="wrap-input100 validate-input" data-validate="Password is required">
    						<input class="input100" type="password" name="pass" required
                       onChange={result => this.setState({password: result.target.value})} />
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
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginWaiting: () => dispatch(setLoginWaiting()),
    setLoginSuccess: () => dispatch(setLoginSuccess()),
    setLoginError: () => dispatch(setLoginError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
