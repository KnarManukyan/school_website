import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCourse, resetAddedId, getClass, getTeacher } from '../../../actions';
import  CourseForm from '../components/CourseForm.js'

class AddCourseContainer extends Component {
  componentDidMount(){
    this.props.getClass();
    this.props.getTeacher();
  }
  render() {
    return (
      <div>
        <CourseForm getCourse = {this.props.getCourse}
                     onSubmit = {this.props.addCourse}
                     teachers = {this.props.teachers}
                     classes = {this.props.classes}
                     addedId = {this.props.addedId}
                     resetAddedId = {this.props.resetAddedId}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    addedId: state.commonlyUsedReducer.addedId,
    classes: state.classesReducer.classes,
    teachers: state.teachersReducer.teachers
  })
}
export default connect(mapStateToProps, { addCourse, resetAddedId, getClass, getTeacher })(AddCourseContainer);
