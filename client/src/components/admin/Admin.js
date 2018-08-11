import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import '../component.css';
import image from '../../assets/motivationalQuote.jpg'
class Admin extends Component {
  render() {
    return (
      <div className = 'content'>
       <h1 className = 'large-text'>Welcome to your school website</h1>
        <div>
        <img  src= {image} style = {{height: '590px', marginLeft: '25%'}}/>
        </div>
      </div>
    )
  }
}
export default Admin;
