import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClass, editClass, getTeacher, getFreeTeachers} from '../../../actions';
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
    for(let i = 0; i<this.props.classes.length; i++){
      if(this.props.classes[i].id === Number(this.props.match.params.id)){
       this.state.classRow = this.props.classes[i];
      }
    }
    return (
      <div>
        <ClassForm onSubmit = {this.props.editClass}
                   classRow = {this.state.classRow}
                   teachers = {this.props.freeTeachers}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes,
    freeTeachers: state.classesReducer.freeTeachers
  })
}
export default connect(mapStateToProps, {  getClass, editClass, getTeacher, getFreeTeachers })(EditClassContainer);
