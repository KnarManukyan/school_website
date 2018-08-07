import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../component.css';

class Teacher extends Component {
  render() {
    return (
      <div>
        <div className="teacher">
          <h1> Teachers </h1>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({})
}



export default connect(mapStateToProps, {})(Teacher);
