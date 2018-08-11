import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeacher, addTeacher } from '../../../actions';
import  TeacherForm from '../components/TeacherForm.js'

class TeachersListContainer extends Component {
  componentDidMount(){
    this.props.getTeacher();
  }
  render() {
    return (
      <div>
        <TeacherForm getTeacher = {this.props.getTeacher} onSubmit = {this.props.addTeacher} teachers = {this.props.teachers} buttonName = 'Add' addedId = {this.props.addedTeacherId}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers,
    addedTeacherId: state.teachersReducer.addedTeacherId
  })
}
export default connect(mapStateToProps, {  getTeacher, addTeacher })(TeachersListContainer);
