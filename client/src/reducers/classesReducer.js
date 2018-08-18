import { SET_CLASS_ARRAY, SET_FREE_TEACHERS } from '../actions/type.js';
const initialState = {
  classes: null,
  freeTeachers: null,
};


export default function classesReducer(state = initialState, action){
    switch (action.type) {
    case SET_CLASS_ARRAY:{
      return {
        ...state,
        classes: action.array
      };
    }
    case SET_FREE_TEACHERS:{
      return {
        ...state,
        freeTeachers: action.array
      };
    }
    default:
      return state;
  }
}
