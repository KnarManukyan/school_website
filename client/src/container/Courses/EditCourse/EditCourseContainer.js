import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCourses, editCourse, getClasses, getTeachers, resetMessage } from '../../../actions';
import  CourseForm from '../components/CourseForm.js'

class EditCourseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       courseRow: {}
     }
  }
  componentDidMount(){
    this.props.getCourses();
    this.props.getClasses();
    this.props.getTeachers();
  }
  render() {
    if(this.props.courses){
      for(let i = 0; i<this.props.courses.length; i++){
        if(this.props.courses[i].id === Number(this.props.match.params.id)){
         this.state.courseRow = this.props.courses[i];
        }
      }
    }
    return (
      <div>
        <CourseForm onSubmit = {this.props.editCourse}
                     courses = {this.props.courses}
                     classes = {this.props.classes}
                     teachers = {this.props.teachers}
                     message = {this.props.message}
                     courseRow = {this.state.courseRow}
                     resetMessage = {this.props.resetMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    courses: state.coursesReducer.courses,
    classes: state.classesReducer.classes,
    teachers: state.teachersReducer.teachers,
    message: state.coursesReducer.errorMessage,
  })
}
export default connect(mapStateToProps, {  getCourses, editCourse, getClasses, getTeachers, resetMessage })(EditCourseContainer);
