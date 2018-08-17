import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeacher, addTeacher, resetAddedId } from '../../../actions';
import  TeacherForm from '../components/TeacherForm.js'

class AddTeacherContainer extends Component {
  componentDidMount(){
    this.props.getTeacher();
  }
  render() {
    return (
      <div>
        <TeacherForm getTeacher = {this.props.getTeacher}
                     onSubmit = {this.props.addTeacher}
                     teachers = {this.props.teachers}
                     resetAddedId = {this.props.resetAddedId} 
                     addedId = {this.props.addedId}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachers: state.teachersReducer.teachers,
    addedId: state.commonlyUsedReducer.addedId
  })
}
export default connect(mapStateToProps, {  getTeacher, addTeacher, resetAddedId })(AddTeacherContainer);
