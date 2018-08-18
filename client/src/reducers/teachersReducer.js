import { SET_TEACHER_ARRAY, SET_ADDED_TEACHER_ID } from '../actions/type.js';

const initialState = {
  teachers: null
};


export default function teacherReducer(state = initialState, action){
    switch (action.type) {
    case SET_TEACHER_ARRAY:{
      return {
        ...state,
        teachers: action.array
      };
    }
    default:
      return state;
  }
}
