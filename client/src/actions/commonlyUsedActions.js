import { STARTING_EDITING, FINISH_EDITING , CHANGE_THE_STATE_OF_THE_MODAL, SET_THE_RAW_TO_BE_DELETED } from './type.js';


export function startingEditing(id){
  return {
    type: STARTING_EDITING,
    id
  }
}

export function finishEditing(){
  return {
    type: FINISH_EDITING
  }
}

export function changeTheStateOfTheModal(){
  return {
    type: CHANGE_THE_STATE_OF_THE_MODAL
  }
}

export function setTheRawToBeDeleted(id){
  return {
    type: SET_THE_RAW_TO_BE_DELETED,
    id
  }
}
