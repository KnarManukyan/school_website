import React, { Component } from 'react';
import {history} from '../../../history.js';
import './form.css'
class TeacherForm extends Component {
  componentDidUpdate(){
    if(this.props.addedId){
      history.push(`/teachers/edit/${this.props.addedId}`);
      }
  }
  render() {
    let input = {};
    for(let i = 0; i<this.props.teachers.length; i++){
      if(this.props.teachers[i].id === Number(this.props.id)){
       input = this.props.teachers[i];
      }
    }
    return (
      <div className = 'content'>
        <form>
          <input defaultValue ={input.firstName} placeholder="Enter firstname" onChange={(evt) => {input.firstName = evt.target.value}}/>
          <input defaultValue={input.lastName} placeholder="Enter lastname" onChange={(evt) => {input.lastName = evt.target.value}}/>
          <input defaultValue={input.phone} placeholder="Enter phone" onChange={(evt) => {input.phone = evt.target.value}}/>
          <input defaultValue={input.email} placeholder="Enter email" onChange={(evt) => {input.email = evt.target.value}}/>
          {(this.props.id ?
            <div>
            <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
              Save
            </button>
            <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);history.push(`/teachers`)}}>
              Save and close
            </button>
            </div>
          : <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
            Add
          </button>)}
          <button className = 'edit-button' onClick={() => {history.push('/teachers')}}>
            Close
          </button>
        </form>
      </div>
    )
  }
}

export default TeacherForm;
