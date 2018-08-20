import { SET_ADDED_ID, RESET_ADDED_ID, SET_SWEET_ALERT, RESET_ALERT_MESSAGE } from './type.js';


export function setAddedId(id) {
  return {
    type: SET_ADDED_ID,
    id
  }
}

export function resetAddedId () {
 return {
   type: RESET_ADDED_ID
 }
}

export function setSweetAlert (alertType, message) {
 return {
   type: SET_SWEET_ALERT,
   alertType,
   message
 }
}

export function resetAlertMessage () {
 return {
   type: RESET_ALERT_MESSAGE
 }
}

export function dispatchAlert(dispatch, result){
  if(result.error === 'SequelizeForeignKeyConstraintError'){
    dispatch(setSweetAlert('danger', "The data you want to delete is connected to other tables! Please, edit them first."))
  } else if(result.code === 200){
    dispatch(setSweetAlert('success', result.message))
  } else {
    dispatch(setSweetAlert('error', result.message))
  }
}
