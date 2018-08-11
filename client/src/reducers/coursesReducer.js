import { SET_COURSE_ARRAY } from '../actions/type.js';

const initialState = {
  courses: null
};


export default function coursesReducer(state = initialState, action){
    switch (action.type) {
    case SET_COURSE_ARRAY:{
      return {
        ...state,
        courses: action.array
      };
    }
    default:
      return state;
  }
}
