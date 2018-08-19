import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudents, deleteStudent, resetAlertMessage } from '../../../actions';
import  StudentsList from './components/StudentsList.js'

class StudentsListContainer extends Component {
  render() {
    return (
      <div>
        <StudentsList getStudents = {this.props.getStudents}
                      students = {this.props.students}
                      deleteStudent = {this.props.deleteStudent}
                      sweetAlertMessage = {this.props.sweetAlertMessage}
                      resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, { getStudents, deleteStudent, resetAlertMessage })(StudentsListContainer);
