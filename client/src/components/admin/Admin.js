import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut} from '../../actions';
import Student from '../student/Student.js'
import Teacher from '../teacher/Teacher.js'
import Class from '../class/Class.js'
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <header>
          <button className="log-out-button" onClick={this.props.logOut}> Log out </button>
        </header>
        <div>
          <Teacher />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {logOut})(Admin);
