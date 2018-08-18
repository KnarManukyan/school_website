import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeachers, editTeacher } from '../../../actions';
import  TeacherForm from '../components/TeacherForm.js'

class EditTeacherContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       teacherRow: {}
     }
  }
  componentDidMount(){
    this.props.getTeachers();
  }
  render() {
    for(let i = 0; i<this.props.teachers.length; i++){
      if(this.props.teachers[i].id === Number(this.props.match.params.id)){
        this.state.teacherRow = this.props.teachers[i];
      }
    }
    return (
      <div>
        <TeacherForm onSubmit = {this.props.editTeacher}
                     teachers = {this.props.teachers}
                     teacherRow = {this.state.teacherRow}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers
  })
}
export default connect(mapStateToProps, {  getTeachers, editTeacher })(EditTeacherContainer);
