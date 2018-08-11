import { SET_TEACHER_ARRAY, STARTING_EDITING, FINISH_EDITING , CHANGE_THE_STATE_OF_THE_MODAL, SET_THE_RAW_TO_BE_DELETED, SET_ADDED_TEACHER_ID } from './type.js';

export function setTeachersArray(array) {
  return {
    type: SET_TEACHER_ARRAY,
    array
  }
}

export function setAddedTeacherId(id) {
  return {
    type: SET_ADDED_TEACHER_ID,
    id
  }
}

export function getTeacher() {
  return dispatch =>
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/teachers`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
       return response.json();
    }).then(response => {
      console.log(response);
      dispatch(setTeachersArray(response));
    }).catch(error => { console.log('request failed', error); });
}

export function deleteTeacher(id) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/teacher/${id}`;
  return dispatch =>
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => {
    return dispatch(getTeacher())
    }).catch(error => { console.log('request failed', error); });
}

export function addTeacher(student) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/teacher`;
  return dispatch =>
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'firstName': student.firstName,
        'lastName': student.lastName,
        'phone': student.phone,
        'email': student.email
      })
    }).then(response => {
       return response.json();
    }).then((result) => {
      console.log(result);
      dispatch(setAddedTeacherId(result.id));
    return dispatch(getTeacher())
    }).catch(error => { console.log('request failed', error); });
}

export function editTeacher(input) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/teacher/${input.id}`;
  return dispatch =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'firstName': input.firstName,
        'lastName': input.lastName,
        'phone': input.phone,
        'email': input.email,
      })
    }).then(() => {
    return dispatch(getTeacher())
    }).catch(error => { console.log('request failed', error); });
}
