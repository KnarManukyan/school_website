import { STARTING_EDITING, FINISH_EDITING, CHANGE_THE_STATE_OF_THE_MODAL, SET_THE_RAW_TO_BE_DELETED  } from '../actions/type.js';

const initialState = {
  editingRaw: null,
  isModalOpened: false,
  deletingRaw: null
};


export default function studentsReducer(state = initialState, action){
    switch (action.type) {
    case STARTING_EDITING:{
      return {
        ...state,
        editingRaw: action.id
      };
    }
    case FINISH_EDITING:{
      return {
        ...state,
        editingRaw: null
      };
    }
    case CHANGE_THE_STATE_OF_THE_MODAL:{
      return{
        ...state,
        isModalOpened: !state.isModalOpened
      };
    }
    case SET_THE_RAW_TO_BE_DELETED:{
      return{
        ...state,
        deletingRaw: action.id
      };
    }
    default:
      return state;
  }
}
