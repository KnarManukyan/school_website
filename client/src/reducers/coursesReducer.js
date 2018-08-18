import { SET_COURSE_ARRAY, SEND_MESSAGE, RESET_MESSAGE } from '../actions/type.js';

const initialState = {
  courses: null,
  errorMessage: null
};


export default function coursesReducer(state = initialState, action){
    switch (action.type) {
    case SET_COURSE_ARRAY:{
      return {
        ...state,
        courses: action.array
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        errorMessage: action.message
      };
    }
    case RESET_MESSAGE: {
      return {
        ...state,
        errorMessage: null
      };
    }
    default:
      return state;
  }
}
