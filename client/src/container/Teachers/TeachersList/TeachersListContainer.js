import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeachers, deleteTeacher } from '../../../actions';
import  TeachersList from './components/TeachersList.js'

class TeachersListContainer extends Component {
  render() {
    return (
      <div>
        <TeachersList getTeachers = {this.props.getTeachers}
                      teachers = {this.props.teachers}
                      deleteTeacher = {this.props.deleteTeacher}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers
  })
}
export default connect(mapStateToProps, { getTeachers, deleteTeacher })(TeachersListContainer);
