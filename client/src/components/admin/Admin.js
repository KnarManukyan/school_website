import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut} from '../../actions';
import Student from '../Student.js'
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <header>
          <button className="log-out-button" onClick={this.props.logOut}> Log out </button>
        </header>
        <div>
          <Student />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {logOut})(Admin);
