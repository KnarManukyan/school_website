import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCourse, resetAddedId, getClasses, getTeachers, resetAlertMessage } from '../../../actions';
import  CourseForm from '../components/CourseForm.js'

class AddCourseContainer extends Component {
  componentDidMount(){
    this.props.getClasses();
    this.props.getTeachers();
  }
  render() {
    return (
      <div>
        <CourseForm getCourses = {this.props.getCourses}
                     onSubmit = {this.props.addCourse}
                     teachers = {this.props.teachers}
                     classes = {this.props.classes}
                     message = {this.props.message}
                     addedId = {this.props.addedId}
                     resetAddedId = {this.props.resetAddedId}
                     sweetAlertMessage = {this.props.sweetAlertMessage}
                     resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    addedId: state.commonlyUsedReducer.addedId,
    classes: state.classesReducer.classes,
    teachers: state.teachersReducer.teachers,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, { addCourse, resetAddedId, getClasses, getTeachers, resetAlertMessage })(AddCourseContainer);
