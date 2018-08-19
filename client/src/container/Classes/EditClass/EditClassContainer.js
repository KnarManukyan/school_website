import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClasses, editClass, getTeachers, getFreeTeachers, resetAlertMessage } from '../../../actions';
import  ClassForm from '../components/ClassForm.js'

class EditClassContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
       classRow: {},
       checked: false
     }
  }
  componentDidMount(){
    this.props.getClasses();
    this.props.getTeachers();
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
    if(this.props.classes){
      for(let i = 0; i<this.props.classes.length; i++){
        if(this.props.classes[i].id === Number(this.props.match.params.id)){
         this.state.classRow = this.props.classes[i];
        }
      }
    }
    return (
      <div>
        <ClassForm onSubmit = {this.props.editClass}
                   classRow = {this.state.classRow}
                   teachers = {this.props.freeTeachers}
                   sweetAlertMessage = {this.props.sweetAlertMessage}
                   resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes,
    freeTeachers: state.classesReducer.freeTeachers,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, {  getClasses, editClass, getTeachers, getFreeTeachers, resetAlertMessage })(EditClassContainer);
