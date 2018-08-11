import { SET_ADDED_ID, RESET_ADDED_ID } from './type.js';


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
