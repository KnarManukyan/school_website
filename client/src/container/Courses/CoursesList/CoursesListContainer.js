import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCourses, deleteCourse } from '../../../actions';
import  CoursesList from './components/CoursesList.js'

class CoursesListContainer extends Component {
  render() {
    return (
      <div>
        <CoursesList getCourses = {this.props.getCourses}
                     courses = {this.props.courses}
                     deleteCourse = {this.props.deleteCourse}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    courses: state.coursesReducer.courses
  })
}
export default connect(mapStateToProps, { getCourses, deleteCourse })(CoursesListContainer);
