import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeacher, deleteTeacher } from '../../../actions';
import  TeachersList from './components/TeachersList.js'

class TeachersListContainer extends Component {
  render() {
    return (
      <div>
        <TeachersList getTeacher = {this.props.getTeacher} teachers = {this.props.teachers} deleteTeacher = {this.props.deleteTeacher}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers
  })
}
export default connect(mapStateToProps, { getTeacher, deleteTeacher })(TeachersListContainer);
