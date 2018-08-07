import { SET_STUDENT_ARRAY, STARTING_EDITING, FINISH_EDITING , CHANGE_THE_STATE_OF_THE_MODAL, SET_THE_RAW_TO_BE_DELETED } from './type.js';

export function setStudentsArray(array) {
  return {
    type: SET_STUDENT_ARRAY,
    array
  }
}

export function getStudent() {
  return dispatch =>
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/students`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
       return response.json();
    }).then(response => {
      dispatch(setStudentsArray(response.students));
    })
    .catch(error => { console.log('request failed', error); });
}

export function deleteStudent(id) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/student/${id}`;
  return dispatch =>
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => {
    return dispatch(getStudent())})
    .catch(error => { console.log('request failed', error); });
}

export function addStudent(student) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/student`;
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
        'age': student.age,
        'gender': student.gender,
        'phone': student.phone,
        'email': student.email
      })
    }).then(() => {
    return dispatch(getStudent())})
    .catch(error => { console.log('request failed', error); });
}

export function editStudent(input) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/student/${input.id}`;
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
        'age': input.age,
        'gender': input.gender,
        'phone': input.phone,
        'email': input.email,
      })
    }).then(() => {
    return dispatch(getStudent())})
    .catch(error => { console.log('request failed', error); });
}
