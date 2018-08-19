import { SET_STUDENT_ARRAY } from './type.js';
import {setAddedId, dispatchAlert} from './commonlyUsedActions'
import {unitedFetch} from './fetch.js'

export function setStudentsArray(array) {
  return {
    type: SET_STUDENT_ARRAY,
    array
  }
}

export function getStudents() {
    return dispatch =>
      dispatch(unitedFetch('GET','/students'))
      .then(response => {
        dispatch(setStudentsArray(response));
      })
}

export function deleteStudent(id) {
  return dispatch =>
    dispatch(unitedFetch('DELETE',`/student/${id}`))
    .then((result) => {
      dispatchAlert(dispatch, result);
    return dispatch(getStudents())})
    .catch(error => { console.log('request failed', error); });
}

export function addStudent(student, goToEdit) {
  let body = {
    'firstName': student.firstName,
    'lastName': student.lastName,
    'age': student.age,
    'gender': student.gender,
    'phone': student.phone,
    'email': student.email,
    'classId': student.classId
  }
  return dispatch =>
    dispatch(unitedFetch('POST',`/student`, body))
    .then((result) => {
      dispatchAlert(dispatch, result);
      if(!goToEdit){
        dispatch(setAddedId(result.id));
      }
    })
    .catch(error => { console.log('request failed', error); });
}


export function editStudent(input) {
  let body = {
    'firstName': input.firstName,
    'lastName': input.lastName,
    'age': input.age,
    'gender': input.gender,
    'phone': input.phone,
    'email': input.email,
    'classId': input.classId
  }
  return dispatch =>
    dispatch(unitedFetch('PUT',`/student/${input.id}`, body))
    .then(result=>{
      dispatchAlert(dispatch, result);
    })
    .catch(error => { console.log('request failed', error); });
}
