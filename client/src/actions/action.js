import {LoginTypes} from './type.js';
import Redux from 'redux';

export function setLoginWaiting() {
  return {
    type: "SET_LOGIN_WAITING",
  };
}

export function setLoginSuccess() {
  return {
    type: "SET_LOGIN_SUCCESS",
  };
}

export function setLoginError() {
  return {
    type: "SET_LOGIN_ERROR",
  }
}
