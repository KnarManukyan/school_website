import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudents, deleteStudent } from '../../../actions';
import  StudentsList from './components/StudentsList.js'

class StudentsListContainer extends Component {
  render() {
    return (
      <div>
        <StudentsList getStudents = {this.props.getStudents}
                      students = {this.props.students}
                      deleteStudent = {this.props.deleteStudent}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students
  })
}
export default connect(mapStateToProps, { getStudents, deleteStudent })(StudentsListContainer);
