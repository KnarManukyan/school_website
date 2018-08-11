import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeacher, editTeacher } from '../../../actions';
import  TeacherForm from '../components/TeacherForm.js'

class TeachersListContainer extends Component {
  componentDidMount(){
    this.props.getTeacher();
  }
  render() {
    return (
      <div>
        <TeacherForm onSubmit = {this.props.editTeacher} teachers = {this.props.teachers} buttonName = 'Edit' id = {this.props.match.params.id}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers
  })
}
export default connect(mapStateToProps, {  getTeacher, editTeacher })(TeachersListContainer);
