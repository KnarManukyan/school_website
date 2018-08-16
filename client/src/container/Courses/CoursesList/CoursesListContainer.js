import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCourse, deleteCourse } from '../../../actions';
import  CoursesList from './components/CoursesList.js'

class CoursesListContainer extends Component {
  render() {
    return (
      <div>
        <CoursesList getCourse = {this.props.getCourse}
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
export default connect(mapStateToProps, { getCourse, deleteCourse })(CoursesListContainer);
