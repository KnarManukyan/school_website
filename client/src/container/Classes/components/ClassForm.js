import React, { Component } from 'react';
import {history} from '../../../history.js';
import './form.css'

class ClassForm extends Component {
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/classes/edit/${this.props.addedId}`);
      }
  }
  render() {
    let input = {};
    for(let i = 0; i<this.props.classes.length; i++){
      if(this.props.classes[i].id === Number(this.props.id)){
       input = this.props.classes[i];
      }
    }
    return (
      <div className = 'content'>
        <form>
          <input defaultValue ={input.name} placeholder="Enter name" onChange={(evt) => {input.name = evt.target.value}}/>
          <input defaultValue={input.teacherId} placeholder="Enter teacherId" onChange={(evt) => {input.teacherId = evt.target.value}}/>
          {(this.props.id ?
            <div>
            <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
              Save
            </button>
            <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);history.push(`/classes`)}}>
              Save and close
            </button>
            </div>
          : <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
            Add
          </button>)}
          <button className = 'edit-button' onClick={() => {history.push('/classes')}}>
            Close
          </button>
        </form>
      </div>
    )
  }
}

export default ClassForm;
