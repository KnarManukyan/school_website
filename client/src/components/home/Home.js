import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import '../component.css';
import pic1 from '../../assets/success.jpg'
import pic2 from '../../assets/wellEducatedMind.jpg';
import pic3 from '../../assets/TheAimOfEducation.jpg';

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [pic1,pic2,pic3]
    }
  }
  render() {
    let randomNumber = Math.floor(Math.random() * this.state.pictures.length+1)-1;
    return (
      <div className = 'content'>
       <h1 className = 'large-text'>Welcome to your school website</h1>
        <div>
        <img  src= {this.state.pictures[randomNumber]} style = {{height: '590px', marginLeft: '25%'}}/>
        </div>
      </div>
    )
  }
}
export default Admin;
