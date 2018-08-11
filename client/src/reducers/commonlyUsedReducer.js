import { SET_ADDED_ID, RESET_ADDED_ID  } from '../actions/type.js';

const initialState = {
  addedId: null
};


export default function studentsReducer(state = initialState, action){
    switch (action.type) {
    case SET_ADDED_ID:{
      return{
        ...state,
        addedId: action.id
      };
    }
    case  RESET_ADDED_ID:{
      return{
        ...state,
        addedId: null
      };
    }
    default:
      return state;
  }
}
