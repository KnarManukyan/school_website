import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudents, addStudent, resetAddedId, getClasses, resetAlertMessage } from '../../../actions';
import  StudentForm from '../components/StudentForm.js'

class AddStudentContainer extends Component {
  componentDidMount(){
    this.props.getStudents();
    this.props.getClasses();
  }
  render() {
    return (
      <div>
        <StudentForm getStudents = {this.props.getStudents}
                     onSubmit = {this.props.addStudent}
                     students = {this.props.students}
                     classes = {this.props.classes}
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
    students: state.studentsReducer.students,
    addedId: state.commonlyUsedReducer.addedId,
    classes: state.classesReducer.classes,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, {  getStudents, addStudent, resetAddedId, getClasses, resetAlertMessage })(AddStudentContainer);
