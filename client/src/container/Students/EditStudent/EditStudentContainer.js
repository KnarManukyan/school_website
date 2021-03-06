import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudents, editStudent, getClasses, resetAlertMessage } from '../../../actions';
import  StudentForm from '../components/StudentForm.js'

class EditStudentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       studentRow: {}
     }
  }
  componentDidMount(){
    this.props.getStudents();
    this.props.getClasses();
  }
  render() {
    if(this.props.students){
      for(let i = 0; i<this.props.students.length; i++){
        if(this.props.students[i].id === Number(this.props.match.params.id)){
         this.state.studentRow = this.props.students[i];
        }
      }
    }
    return (
      <div>
        <StudentForm onSubmit = {this.props.editStudent}
                     students = {this.props.students}
                     classes = {this.props.classes}
                     studentRow = {this.state.studentRow}
                     sweetAlertMessage = {this.props.sweetAlertMessage}
                     resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students,
    classes: state.classesReducer.classes,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage,
  })
}
export default connect(mapStateToProps, {  getStudents, editStudent, getClasses, resetAlertMessage })(EditStudentContainer);
