import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClasses, deleteClass, resetAlertMessage } from '../../../actions';
import  ClassesList from './components/ClassesList.js'

class ClassesListContainer extends Component {
  render() {
    return (
      <div>
        <ClassesList getClasses = {this.props.getClasses}
                     classes = {this.props.classes}
                     deleteClass = {this.props.deleteClass}
                     sweetAlertMessage = {this.props.sweetAlertMessage}
                     resetAlertMessage = {this.props.resetAlertMessage}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes,
    sweetAlertMessage: state.commonlyUsedReducer.sweetAlertMessage
  })
}
export default connect(mapStateToProps, { getClasses, deleteClass, resetAlertMessage })(ClassesListContainer);
