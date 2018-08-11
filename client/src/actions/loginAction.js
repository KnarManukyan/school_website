import {SET_EMAIL,SET_PASSWORD, LOGGIN_FAILED, ENABLE_OR_DISABLE_BUTTON} from './type.js';
import {history} from '../history.js';


export function setLoginFailure(message) {
  return {
    type: LOGGIN_FAILED,
    message
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
