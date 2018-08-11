import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClass, addClass, resetAddedId } from '../../../actions';
import  ClassForm from '../components/ClassForm.js'

class ClassesListContainer extends Component {
  componentDidMount(){
    this.props.getClass();
  }
  render() {
    return (
      <div>
        <ClassForm getClass = {this.props.getClass} onSubmit = {this.props.addClass} classes = {this.props.classes} buttonName = 'Add' addedId = {this.props.addedId} resetAddedId = {this.props.resetAddedId}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes,
    addedId: state.commonlyUsedReducer.addedId
  })
}
export default connect(mapStateToProps, {  getClass, addClass, resetAddedId })(ClassesListContainer);
