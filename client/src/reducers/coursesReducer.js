import { SET_COURSE_ARRAY, SEND_MESSAGE } from '../actions/type.js';

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
    default:
      return state;
  }
}
