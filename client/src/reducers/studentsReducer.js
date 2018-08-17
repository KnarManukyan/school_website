import { SET_STUDENT_ARRAY } from '../actions/type.js';

const initialState = {
  students: null
};


export default function studentsReducer(state = initialState, action){
    switch (action.type) {
    case SET_STUDENT_ARRAY:{
      return {
        ...state,
        students: action.array
      };
    }
    default:
      return state;
  }
}
