import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudent, addStudent, resetAddedId, getClass } from '../../../actions';
import  StudentForm from '../components/StudentForm.js'

class AddStudentContainer extends Component {
  componentDidMount(){
    this.props.getStudent();
    this.props.getClass();
  }
  render() {
    return (
      <div>
        <StudentForm getStudent = {this.props.getStudent}
                     onSubmit = {this.props.addStudent}
                     students = {this.props.students}
                     classes = {this.props.classes}
                     addedId = {this.props.addedId}
                     resetAddedId = {this.props.resetAddedId}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students,
    addedId: state.commonlyUsedReducer.addedId,
    classes: state.classesReducer.classes
  })
}
export default connect(mapStateToProps, {  getStudent, addStudent, resetAddedId, getClass })(AddStudentContainer);
