import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClasses, deleteClass } from '../../../actions';
import  ClassesList from './components/ClassesList.js'

class ClassesListContainer extends Component {
  render() {
    return (
      <div>
        <ClassesList getClasses = {this.props.getClasses}
                     classes = {this.props.classes}
                     deleteClass = {this.props.deleteClass}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    classes: state.classesReducer.classes
  })
}
export default connect(mapStateToProps, { getClasses, deleteClass })(ClassesListContainer);
