import { LOGGIN_FAILED } from './type.js';
import {history} from '../history.js';
import {unitedFetch} from './fetch.js'

export function setLoginFailure(message) {
  return {
    type: LOGGIN_FAILED,
    message
  }
}


export function fetchUser(email, password) {
  return dispatch => {
    dispatch(unitedFetch('POST','login', {"email": email, "password": password}, {'Accept': 'application/json', 'Content-Type': 'application/json'}))
    .then(response => {
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
