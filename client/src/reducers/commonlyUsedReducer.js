import { SET_ADDED_ID, RESET_ADDED_ID, SET_SWEET_ALERT, RESET_ALERT_MESSAGE  } from '../actions/type.js';

const initialState = {
  addedId: null,
  sweetAlertMessage: null
};


export default function commonlyUsedActionsReducer(state = initialState, action){
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
    case  SET_SWEET_ALERT:{
      return{
        ...state,
        sweetAlertMessage: [action.alertType, action.message]
      };
    }
    case RESET_ALERT_MESSAGE:{
      return{
        ...state,
        sweetAlertMessage: null
      };
    }
    default:
      return state;
  }
}
