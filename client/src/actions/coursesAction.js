import { SET_COURSE_ARRAY, SEND_MESSAGE } from './type.js';
import {setAddedId} from './commonlyUsedActions'
import {unitedFetch} from './fetch.js'

export function setCoursesArray(array) {
  return {
    type: SET_COURSE_ARRAY,
    array
  }
}

export function sendMessage(message){
  return {
    type: SEND_MESSAGE,
    message
  }
}

export function getCourses() {
    return dispatch =>
      dispatch(unitedFetch('GET','/courses'))
      .then(response => {
        dispatch(setCoursesArray(response));
      })
}


export function deleteCourse(id) {
  return dispatch =>
    dispatch(unitedFetch('DELETE',`/course/${id}`))
    .then((result) => {
    return dispatch(getCourses())})
    .catch(error => { console.log('request failed', error); });
}


export function addCourse(input, goToEdit) {
  let body = {
    'name': input.name,
    'description': input.description,
    'classId': input.classId,
    'teacherId': input.teacherId,
    'startDate': input.startDate,
    'endDate': input.endDate,
    'timetable': input.timetable
  }
  return dispatch =>
    dispatch(unitedFetch('POST',`/course`, body))
    .then((result) => {
      if(result.messageToShow){
        dispatch(sendMessage(result.messageToShow))
      }else if (!goToEdit){
        dispatch(setAddedId(result.id));
      }
    })
    .catch(error => { console.log('request failed', error); });
}


export function editCourse(input) {
  let body = {
    'name': input.name,
    'description': input.description,
    'classId': input.classId,
    'teacherId': input.teacherId,
    'startDate': input.startDate,
    'endDate': input.endDate,
    'timetable': input.timetable
  }
  return dispatch =>
    dispatch(unitedFetch('PUT',`/course/${input.id}`, body))
    .catch(error => { console.log('request failed', error); });
}
