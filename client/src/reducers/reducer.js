import {LoginTypes} from '../actions/type.js';

const initialState = {
  email: null,
  password: null,
  loginStatus: null
};

export default function(state = initialState, action){
  switch (action.type) {
    case "SET_LOGIN_WAITING":{
      alert("I am here");
      return ({
        email: state.email,
        password: state.password,
        loginStatus: "waiting"
      });
    }

    case "SET_LOGIN_SUCCESS":
      return ({
        email: state.email,
        password: state.password,
        loginStatus: "success"
      });

    case "SET_LOGIN_ERROR":
      return ({
        email: state.email,
        password: state.password,
        loginStatus: "error"
      });

    default:
      return state;
  }
}
