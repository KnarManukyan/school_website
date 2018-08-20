import React, { Component } from 'react';
import '../assets/css/home.css';
import '../assets/css/component.css';
import pic from '../assets/wellEducatedMind.jpg';

class Home extends Component {
  render() {
    return (
      <div className = 'content'>
       <h1 className = 'large-text'>Welcome to your school website</h1>
        <div>
        <img  src= {pic} style = {{height: '590px', marginLeft: '22.5%'}}/>
        </div>
      </div>
    )
  }
}
export default Home;
