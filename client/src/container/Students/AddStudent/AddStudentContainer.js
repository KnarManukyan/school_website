import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudent, addStudent, resetAddedId } from '../../../actions';
import  StudentForm from '../components/StudentForm.js'

class StudentsListContainer extends Component {
  componentDidMount(){
    this.props.getStudent();
  }
  render() {
    return (
      <div>
        <StudentForm getStudent = {this.props.getStudent} onSubmit = {this.props.addStudent} students = {this.props.students} buttonName = 'Add' addedId = {this.props.addedId} resetAddedId = {this.props.resetAddedId}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students,
    addedId: state.commonlyUsedReducer.addedId
  })
}
export default connect(mapStateToProps, {  getStudent, addStudent, resetAddedId })(StudentsListContainer);
