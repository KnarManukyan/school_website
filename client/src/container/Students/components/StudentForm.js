import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'

class StudentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: (this.props.studentRow ? this.props.studentRow : {}),
      message: ''
    }
  }
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/students/edit/${this.props.addedId}`);
      }
  }
  validate = () => {
    if(!this.state.input.firstName){
      this.setState({message: 'Firstname is required'});
    } else if(!this.state.input.lastName){
      this.setState({message: 'Lastname is required'});
    } else if(!this.state.input.age){
      this.setState({message: 'Age is required'});
    } else if(!this.state.input.gender){
      this.setState({message: 'Gender is required'});
    } else if(!this.state.input.classId){
      this.setState({message: 'Class is required'});
    } else {
      this.setState({message: ''});
      return true;
    }
    return false;
  }
  render() {
    let input = this.state.input;
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
          <select  ref = 'input7' name="classes"  className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {input.classId = evt.target.value;}}>>
          <option value=''  default> {(input.Classes ? input.Classes.name :'Choose a class')} </option>
           {this.props.classes ? this.props.classes.map((item,index) =>{
              return(
                   <option key={index} value = {item.id}  > {item.name} </option>
               )}) : true}
           </select>
          <div>
            <h6 className = 'form-required-message'> {this.state.message} </h6>
          </div>
          {(this.props.studentRow ?
            <div  style = {{marginTop: '10px'}}>
              <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault(); if(this.validate()){this.props.onSubmit(input)}}}>
                Save
              </button>
              <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault(); if(this.validate()){this.props.onSubmit(input);history.push(`/students`)}}}>
                Save and close
              </button>
            </div>
          :
          <div>
            <button className = 'add-button' onClick={(e) => {e.preventDefault(); if(this.validate()){this.props.onSubmit(input, false)}}}>
              Add
            </button>
            <button className = 'add-button' onClick={(e) => {e.preventDefault();
                                                              if(this.validate()){
                                                                this.props.onSubmit(input, true);
                                                                this.refs.input1.value = null;
                                                                this.refs.input2.value = null;
                                                                this.refs.input3.value = null;
                                                                this.refs.input4.value = null;
                                                                this.refs.input5.value = null;
                                                                this.refs.input6.value = null;
                                                                this.refs.input7.value = null;
                                                            }
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
