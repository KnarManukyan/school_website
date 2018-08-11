import { SET_CLASS_ARRAY, STARTING_EDITING, FINISH_EDITING , CHANGE_THE_STATE_OF_THE_MODAL, SET_THE_RAW_TO_BE_DELETED } from './type.js';
import {setAddedId} from './commonlyUsedActions'
export function setClassesArray(array) {
  return {
    type: SET_CLASS_ARRAY,
    array
  }
}

export function getClass() {
  return dispatch =>
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/classes`, {
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
      dispatch(setClassesArray(response));
    }).catch(error => { console.log('request failed', error); });
}

export function deleteClass(id) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/class/${id}`;
  return dispatch =>
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(() => {
    return dispatch(getClass())
    }).catch(error => { console.log('request failed', error); });
}

export function addClass(input) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/class`;
  return dispatch =>
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': input.name,
        'teacherId': input.teacherId
      })
    }).then(response => {
       return response.json();
    }).then((result) => {
      dispatch(setAddedId(result.id));
    return dispatch(getClass())
    }).catch(error => { console.log('request failed', error); });
}

export function editClass(input) {
  const url = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/class/${input.id}`;
  return dispatch =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': input.name,
        'teacherId': input.teacherId
      })
    }).then(response => {
       return response.json();
    }).then((result) => {
    console.log(result);
    return dispatch(getClass())
    }).catch(error => { console.log('request failed', error); });
}
