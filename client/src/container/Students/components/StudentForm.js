import React, { Component } from 'react';
import {history} from '../../../history.js';
import './form.css'

class StudentForm extends Component {
  componentDidUpdate(){
    if(this.props.addedId){
      debugger;
      this.props.resetAddedId();
      history.push(`/students/edit/${this.props.addedId}`);
      }
  }
  render() {
    let input = {};
    for(let i = 0; i<this.props.students.length; i++){
      if(this.props.students[i].id === Number(this.props.id)){
       input = this.props.students[i];
      }
    }
    return (
      <div className = 'content'>
        <form>
          <input defaultValue ={input.firstName} placeholder="Enter firstname" onChange={(evt) => {input.firstName = evt.target.value}}/>
          <input defaultValue={input.lastName} placeholder="Enter lastname" onChange={(evt) => {input.lastName = evt.target.value}}/>
          <input defaultValue={input.age} placeholder="Enter age" onChange={(evt) => {input.age = evt.target.value}}/>
          <input defaultValue={input.gender} placeholder="Enter gender" onChange={(evt) => {input.gender = evt.target.value}}/>
          <input defaultValue={input.phone} placeholder="Enter phone" onChange={(evt) => {input.phone = evt.target.value}}/>
          <input defaultValue={input.email} placeholder="Enter email" onChange={(evt) => {input.email = evt.target.value}}/>
          {(this.props.id ?
            <div>
            <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
              Save
            </button>
            <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);history.push(`/students`)}}>
              Save and close
            </button>
            </div>
          : <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
            Add
          </button>)}
          <button className = 'edit-button' onClick={() => {history.push('/students')}}>
            Close
          </button>
        </form>
      </div>
    )
  }
}

export default StudentForm;
