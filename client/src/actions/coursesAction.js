import { SET_COURSE_ARRAY } from './type.js';
import {setAddedId} from './commonlyUsedActions'
import {unitedFetch} from './fetch.js'

export function setCoursesArray(array) {
  return {
    type: SET_COURSE_ARRAY,
    array
  }
}

export function getCourse() {
    return dispatch =>
      dispatch(unitedFetch('GET','/courses'))
      .then(response => {
        console.log(response);
        dispatch(setCoursesArray(response));
      })
}

export function deleteCourse(id) {
  return dispatch =>
    dispatch(unitedFetch('DELETE',`/course/delete/${id}`))
    .then((result) => {
    return dispatch(getCourse())})
    .catch(error => { console.log('request failed', error); });
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function addCourse(input, goToEdit) {
  let body = {
    'name': input.name,
    'description': input.description,
    'classId': input.classId,
    'teacherId': input.teacherId,
    'startDate': formatDate(input.startDate),
    'endDate': formatDate(input.endDate)
  }
  return dispatch =>
    dispatch(unitedFetch('PUT',`/course/add`, body))
    .then((result) => {
      if(!goToEdit){
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
    'startDate': formatDate(input.startDate),
    'endDate': formatDate(input.endDate)
  }
  return dispatch =>
    dispatch(unitedFetch('POST',`/course/edit/${input.id}`, body))
    .catch(error => { console.log('request failed', error); });
}
