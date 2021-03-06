import { SET_COURSE_ARRAY} from './type.js';
import {setAddedId, dispatchAlert} from './commonlyUsedActions'
import {unitedFetch} from './fetch.js'

export function setCoursesArray(array) {
  return {
    type: SET_COURSE_ARRAY,
    array
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
      dispatchAlert(dispatch, result);
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
      dispatchAlert(dispatch, result);
      if (!goToEdit){
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
    .then((result)=>{
      dispatchAlert(dispatch, result);
      })
    .catch(error => { console.log('request failed', error); });
}
