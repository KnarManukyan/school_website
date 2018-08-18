import { SET_TEACHER_ARRAY } from './type.js';
import {setAddedId} from './commonlyUsedActions';
import {unitedFetch} from './fetch.js';

export function setTeachersArray(array) {
  return {
    type: SET_TEACHER_ARRAY,
    array
  }
}


export function getTeachers() {
  return dispatch =>
    dispatch(unitedFetch('GET','/teachers'))
    .then(response => {
      dispatch(setTeachersArray(response));
    })
}

export function deleteTeacher(id) {
  return dispatch =>
    dispatch(unitedFetch('DELETE',`/teacher/${id}`))
    .then((result) => {
    return dispatch(getTeachers())})
    .catch(error => { console.log('request failed', error); });
}

export function addTeacher(teacher, goToEdit) {
  let body = {
        'firstName': teacher.firstName,
        'lastName': teacher.lastName,
        'phone': teacher.phone,
        'email': teacher.email
      }
      return dispatch =>
        dispatch(unitedFetch('POST',`/teacher`, body))
        .then((result) => {
          if(!goToEdit){
            dispatch(setAddedId(result.id));
          }
        })
        .catch(error => { console.log('request failed', error); });
}

export function editTeacher(input) {
  let body = {
        'firstName': input.firstName,
        'lastName': input.lastName,
        'phone': input.phone,
        'email': input.email,
      }
      return dispatch =>
        dispatch(unitedFetch('PUT',`/teacher/${input.id}`, body))
        .catch(error => { console.log('request failed', error); });
}
