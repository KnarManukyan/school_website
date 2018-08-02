import fetch from 'isomorphic-fetch';
import {SET_EMAIL,SET_PASSWORD, LOGGED_FAILED, LOGOUT, ENABLE_OR_DISABLE_BUTTON} from './type.js';
import {history} from '../history.js';


export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  }
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password
  }
}

export function ChangeTheStateOfSubmitButton(boolean) {
  return {
    type: ENABLE_OR_DISABLE_BUTTON,
    boolean
  }
}
export function setLoginFailure(message) {
  return {
    type: LOGGED_FAILED,
    message
  }
}

export function logOut() {
  return {
    type: LOGOUT,
  }
}


export function fetchUser(email, password) {
  return dispatch => {
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })
    .then(response => {

       return response.json();
    }).then(response => {
      if (response.code === 200) {
        if(response.token) {
          localStorage.setItem('user', JSON.stringify(response.token))
          history.push('/home');
        }
      } else {
        dispatch(setLoginFailure(response.message));
      }
    })
    .catch(error => { console.log('request failed', error); });
}
}
