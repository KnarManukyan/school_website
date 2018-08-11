import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClass, editClass } from '../../../actions';
import  ClassForm from '../components/ClassForm.js'

class ClassesListContainer extends Component {
  componentDidMount(){
    this.props.getClass();
  }
  render() {
    return (
      <div>
        <ClassForm onSubmit = {this.props.editClass} classes = {this.props.classes} buttonName = 'Edit' id = {this.props.match.params.id}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes
  })
}
export default connect(mapStateToProps, {  getClass, editClass })(ClassesListContainer);
