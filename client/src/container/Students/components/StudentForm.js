import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'

class StudentForm extends Component {
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/students/edit/${this.props.addedId}`);
      }
  }
  render() {
    let input = (this.props.studentRow ? this.props.studentRow : {});
    return (
      <div className = 'content'>
        <form className = 'add-edit-form'>
          <button style = {{float: 'right'}} onClick={() => {history.push('/students')}}>
          <Icon className = 'icon-button' style = {{color: '#626262', float: 'right'}} size={15} icon={close} />
          </button>
          <h3 style = {{margin: '15px'}} className = 'add-input-title' >{(this.props.studentRow  ? `Editing student ${input.firstName} ${input.lastName}` : 'Add a new student')}</h3>
          <input  ref = 'input1' className = 'add-edit-input' defaultValue ={input.firstName} placeholder='Enter firstname' onChange={(evt) => {input.firstName = evt.target.value}} required="required"/>
          <input  ref = 'input2' className = 'add-edit-input' defaultValue={input.lastName} placeholder='Enter lastname' onChange={(evt) => {input.lastName = evt.target.value}}/>
          <input  ref = 'input3' className = 'add-edit-input' defaultValue={input.age} placeholder='Enter age' onChange={(evt) => {input.age = evt.target.value}}/>
          <input  ref = 'input4' className = 'add-edit-input' defaultValue={input.gender} placeholder='Enter gender' onChange={(evt) => {input.gender = evt.target.value}}/>
          <input  ref = 'input5' className = 'add-edit-input' defaultValue={input.phone} placeholder='Enter phone' onChange={(evt) => {input.phone = evt.target.value}}/>
          <input  ref = 'input6' className = 'add-edit-input' defaultValue={input.email} placeholder='Enter email' onChange={(evt) => {input.email = evt.target.value}}/>
          <input  ref = 'input7' className = 'add-edit-input' defaultValue = {(input.Classes ? `${input.Classes.name}` : "")} placeholder="Choose a class"  type="text" list="data" onChange={(evt)=>{for(let i = 0; i<this.props.classes.length; i++){
                                                                                                                                                            if(evt.target.value === `${this.props.classes[i].name}`){
                                                                                                                                                               input.classId = this.props.classes[i].id;
                                                                                                                                                            }
                                                                                                                                                          }}} />
          <datalist id="data">
          {this.props.classes.map((item) =>{
             return(
                  <option value = {`${item.name}`} required />
              )})}
          </datalist>
          {(this.props.studentRow ?
            <div  style = {{marginTop: '10px'}}>
              <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
                Save
              </button>
              <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);history.push(`/students`)}}>
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
                                                              this.refs.input3.value = null;
                                                              this.refs.input4.value = null;
                                                              this.refs.input5.value = null;
                                                              this.refs.input6.value = null;
                                                              this.refs.input7.value = null;
                                                            }}>
              Add More
            </button>
          </div>)}
        </form>
      </div>
    )
  }
}

export default StudentForm;
