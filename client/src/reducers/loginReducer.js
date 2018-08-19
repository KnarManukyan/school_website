import { LOGGIN_FAILED } from '../actions/type.js';

const initialState = {
  message: null
};

export default function loginReducer(state = initialState, action){
    switch (action.type) {
    case LOGGIN_FAILED:
      return ({
        ...state,
        message: action.message
      });
    default:
      return state;
  }
}
