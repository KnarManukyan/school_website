import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getStudent, editStudent, getClass } from '../../../actions';
import  StudentForm from '../components/StudentForm.js'

class EditStudentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       studentRow: {}
     }
  }
  componentDidMount(){
    this.props.getStudent();
    this.props.getClass();
  }
  render() {
    for(let i = 0; i<this.props.students.length; i++){
      if(this.props.students[i].id === Number(this.props.match.params.id)){
       this.state.studentRow = this.props.students[i];
      }
    }
    return (
      <div>
        <StudentForm onSubmit = {this.props.editStudent}
                     students = {this.props.students}
                     classes = {this.props.classes}
                     studentRow = {this.state.studentRow}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    students: state.studentsReducer.students,
    classes: state.classesReducer.classes
  })
}
export default connect(mapStateToProps, {  getStudent, editStudent, getClass })(EditStudentContainer);
