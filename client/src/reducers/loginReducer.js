import { SET_EMAIL,SET_PASSWORD, LOGGED_FAILED, LOGOUT, ENABLE_OR_DISABLE_BUTTON } from '../actions/type.js';
import { history } from '../history.js';

const initialState = {
  email: null,
  password: null,
  buttonIsDisabled: true,
  message: null
};

export default function loginReducer(state = initialState, action){
    switch (action.type) {
    case SET_EMAIL:{
      return {
        ...state,
        email: action.email
      };
    }
    case SET_PASSWORD:{
      return {
        ...state,
        password: action.password
      };
    }
    case ENABLE_OR_DISABLE_BUTTON:{
      return {
        ...state,
        buttonIsDisabled: action.boolean
      };
    }
    case LOGGED_FAILED:
      return ({
        ...state,
        message: action.message
      });
    case LOGOUT: {
    localStorage.removeItem('user');
    history.push('/')
    return {}
    }
    default:
      return state;
  }
}
