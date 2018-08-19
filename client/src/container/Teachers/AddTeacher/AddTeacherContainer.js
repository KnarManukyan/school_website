import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeachers, addTeacher, resetAddedId, resetAlertMessage  } from '../../../actions';
import  TeacherForm from '../components/TeacherForm.js'

class AddTeacherContainer extends Component {
  componentDidMount(){
    this.props.getTeachers();
  }
  render() {
    return (
      <div>
        <TeacherForm getTeachers = {this.props.getTeachers}
                     onSubmit = {this.props.addTeacher}
                     teachers = {this.props.teachers}
                     resetAddedId = {this.props.resetAddedId}
                     addedId = {this.props.addedId}
                     sweetAlertMessage = {this.props.sweetAlertMessage}
                     resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers,
    addedId: state.commonlyUsedReducer.addedId,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, {  getTeachers, addTeacher, resetAddedId, resetAlertMessage  })(AddTeacherContainer);
