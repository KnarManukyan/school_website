import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getClass, deleteClass } from '../../../actions';
import  ClassesList from './components/ClassesList.js'

class ClassesListContainer extends Component {
  render() {
    return (
      <div>
        <ClassesList getClass = {this.props.getClass}
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
export default connect(mapStateToProps, { getClass, deleteClass })(ClassesListContainer);
