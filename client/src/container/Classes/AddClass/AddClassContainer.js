import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClass, addClass, resetAddedId, getTeacher, getFreeTeachers, setFreeTeachers } from '../../../actions';
import  ClassForm from '../components/ClassForm.js'

class AddClassContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      teachers: [],
      checked:false
    }
  }
  componentDidMount(){
    this.props.getClass();
    this.props.getTeacher();
  }
 componentDidUpdate(){
      if(!this.state.checked){
        this.props.getFreeTeachers();
        this.setState({
          checked:true
        })
      }
  }
  render() {
    return (
      <div>
        <ClassForm getClass = {this.props.getClass}
                   onSubmit = {this.props.addClass}
                   classes = {this.props.classes}
                   teachers = {this.props.freeTeachers}
                   addedId = {this.props.addedId}
                   resetAddedId = {this.props.resetAddedId}
                   getFreeTeachers = {this.props.getFreeTeachers}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes,
    addedId: state.commonlyUsedReducer.addedId,
    freeTeachers: state.classesReducer.freeTeachers
  })
}
export default connect(mapStateToProps, {  getClass, addClass, resetAddedId, getTeacher, getFreeTeachers })(AddClassContainer);
