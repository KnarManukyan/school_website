import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser, setLoginFailure} from '../../actions'
import LoginForm from './components/loginForm'

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm fetchUser = {this.props.fetchUser}
                   setLoginFailure = {this.props.setLoginFailure}
                   message = {this.props.message}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    message: state.loginReducer.message
  })
}

export default connect(mapStateToProps, {fetchUser, setLoginFailure})(Login);
