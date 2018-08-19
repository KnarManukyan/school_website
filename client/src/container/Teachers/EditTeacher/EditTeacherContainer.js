import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeachers, editTeacher, resetAlertMessage } from '../../../actions';
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
    if(this.props.teachers){
    for(let i = 0; i<this.props.teachers.length; i++){
        if(this.props.teachers[i].id === Number(this.props.match.params.id)){
          this.state.teacherRow = this.props.teachers[i];
        }
      }
    }
    return (
      <div>
        <TeacherForm onSubmit = {this.props.editTeacher}
                     teachers = {this.props.teachers}
                     teacherRow = {this.state.teacherRow}
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
export default connect(mapStateToProps, {  getTeachers, editTeacher, resetAlertMessage })(EditTeacherContainer);
