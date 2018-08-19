import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeachers, deleteTeacher, resetAlertMessage } from '../../../actions';
import  TeachersList from './components/TeachersList.js'

class TeachersListContainer extends Component {
  render() {
    return (
      <div>
        <TeachersList getTeachers = {this.props.getTeachers}
                      teachers = {this.props.teachers}
                      deleteTeacher = {this.props.deleteTeacher}
                      sweetAlertMessage = {this.props.sweetAlertMessage}
                      resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, { getTeachers, deleteTeacher, resetAlertMessage })(TeachersListContainer);
