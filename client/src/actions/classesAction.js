import { SET_CLASS_ARRAY, SET_FREE_TEACHERS} from './type.js';
import {setAddedId} from './commonlyUsedActions'
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
        .catch(error => { console.log('request failed', error); });
}

export function getFreeTeachers(id) {
  return dispatch =>
    dispatch(unitedFetch('GET',`/freeTeachers/${id}`))
    .then((result) => {
      dispatch(setFreeTeachers(result));
        return result;
    }).catch(error => { console.log('request failed', error); });
}
