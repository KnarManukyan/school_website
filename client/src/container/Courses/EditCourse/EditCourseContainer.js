import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getCourse, editCourse, getClass, getTeacher } from '../../../actions';
import  CourseForm from '../components/CourseForm.js'

class EditCourseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       courseRow: {}
     }
  }
  componentDidMount(){
    this.props.getCourse();
    this.props.getClass();
    this.props.getTeacher();
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
                     courseRow = {this.state.courseRow}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    courses: state.coursesReducer.courses,
    classes: state.classesReducer.classes,
    teachers: state.teachersReducer.teachers
  })
}
export default connect(mapStateToProps, {  getCourse, editCourse, getClass, getTeacher })(EditCourseContainer);
