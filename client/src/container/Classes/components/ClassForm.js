import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'

class ClassForm extends Component {
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/classes/edit/${this.props.addedId}`);
      }
  }
  render() {
    let input = (this.props.classRow ? this.props.classRow : {})
    return (
      <div className = 'content'>
        <form className = 'add-edit-form'>
          <button style = {{float: 'right'}}  onClick={() => {history.push('/classes')}}>
            <Icon style = {{color: '#626262', float: 'right'}} size={15} icon={close} />
          </button>
          <h3 style = {{margin: '15px'}} className = 'add-input-title' >{(this.props.classRow  ? `Editing class ${input.name}` : 'Add a new class')}</h3>
          <input ref = 'input1' className = 'add-edit-input' defaultValue ={input.name} placeholder="Enter name" onChange={(evt) => {input.name = evt.target.value}}/>
          <input ref = 'input2' className = 'add-edit-input' defaultValue = {(input.Teacher ? `${input.Teacher.firstName} ${input.Teacher.lastName}` : "")} placeholder="Choose a teacher"  type="text" list="data" onChange={(evt)=>{for(let i = 0; i<this.props.teachers.length; i++){
                                                                                                                                  if(evt.target.value === `${this.props.teachers[i].firstName} ${this.props.teachers[i].lastName}`){
                                                                                                                                     input.teacherId = this.props.teachers[i].id;
                                                                                                                                  }
                                                                                                                                }}} />
           <datalist id="data">
           {this.props.teachers.map((item) =>{
              return(
                   <option value = {`${item.firstName} ${item.lastName}`} required />
               )})}
           </datalist>
          {(this.props.classRow ?
            <div  style = {{marginTop: '10px'}}>
            <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
              Save
            </button>
            <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);history.push(`/classes`)}}>
              Save and close
            </button>
            </div>
          :
          <div>
            <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(input, false);}}>
              Add
            </button>
            <button className = 'add-button' onClick={(e) => {e.preventDefault();
                                                              this.props.onSubmit(input, true);
                                                              this.refs.input1.value = null;
                                                              this.refs.input2.value = null;
                                                              this.props.getFreeTeachers()
                                                            }}>
              Add More
            </button>
          </div>)}
        </form>
      </div>
    )
  }
}

export default ClassForm;
