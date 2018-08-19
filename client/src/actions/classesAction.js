import { SET_CLASS_ARRAY, SET_FREE_TEACHERS} from './type.js';
import {setAddedId, dispatchAlert} from './commonlyUsedActions'
import {unitedFetch} from './fetch.js'

export function setClassesArray(array) {
  return {
    type: SET_CLASS_ARRAY,
    array
  }
}

export function setFreeTeachers(array) {
  return {
    type: SET_FREE_TEACHERS,
    array
  }
}

export function getClasses() {
  return dispatch =>
    dispatch(unitedFetch('GET','/classes'))
    .then(response => {
      dispatch(setClassesArray(response));
    })
}

export function deleteClass(id) {
  return dispatch =>
    dispatch(unitedFetch('DELETE',`/class/${id}`))
    .then((result) => {
      dispatchAlert(dispatch, result);
    return dispatch(getClasses())})
    .catch(error => { console.log('request failed', error); });
}

export function addClass(input, goToEdit) {
    let body = {
        'name': input.name,
        'teacherId': input.teacherId
      }
      return dispatch =>
        dispatch(unitedFetch('POST',`/class`, body))
        .then((result) => {
          console.log(result);
          dispatchAlert(dispatch, result);
          if(!goToEdit){
            dispatch(setAddedId(result.id));
          }
        })
        .catch(error => { console.log('request failed', error); });
  }

export function editClass(input) {
    let body = {
        'name': input.name,
        'teacherId': input.teacherId
      }
      return dispatch =>
        dispatch(unitedFetch('PUT',`/class/${input.id}`, body))
        .then(result=>{
          dispatchAlert(dispatch, result);
        })
        .catch(error => { console.log('request failed', error); });
}

export function getFreeTeachers() {
  return dispatch =>
    dispatch(unitedFetch('GET',`/freeTeachers`))
    .then((result) => {
      dispatch(setFreeTeachers(result));
        return result;
    }).catch(error => { console.log('request failed', error); });
}
