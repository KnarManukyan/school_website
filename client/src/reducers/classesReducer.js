import { SET_CLASS_ARRAY } from '../actions/type.js';

const initialState = {
  classes: []
};


export default function classesReducer(state = initialState, action){
    switch (action.type) {
    case SET_CLASS_ARRAY:{
      return {
        ...state,
        classes: action.array
      };
    }
    default:
      return state;
  }
}
