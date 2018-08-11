import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudent, editStudent } from '../../../actions';
import  StudentForm from '../components/StudentForm.js'

class StudentsListContainer extends Component {
  componentDidMount(){
    this.props.getStudent();
  }
  render() {
    return (
      <div>
        <StudentForm onSubmit = {this.props.editStudent} students = {this.props.students} buttonName = 'Edit' id = {this.props.match.params.id}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students
  })
}
export default connect(mapStateToProps, {  getStudent, editStudent })(StudentsListContainer);
