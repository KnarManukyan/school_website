import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCourses, deleteCourse, resetAlertMessage } from '../../../actions';
import  CoursesList from './components/CoursesList.js'

class CoursesListContainer extends Component {
  render() {
    return (
      <div>
        <CoursesList getCourses = {this.props.getCourses}
                     courses = {this.props.courses}
                     deleteCourse = {this.props.deleteCourse}
                     sweetAlertMessage = {this.props.sweetAlertMessage}
                     resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    courses: state.coursesReducer.courses,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, { getCourses, deleteCourse, resetAlertMessage })(CoursesListContainer);
