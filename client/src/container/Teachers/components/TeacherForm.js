import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'

class TeacherForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: (this.props.teacherRow ? this.props.teacherRow : {}),
      message: ''
    }
  }
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/teachers/edit/${this.props.addedId}`);
      }
  }
  validate = () => {
    if(!this.state.input.firstName){
      this.setState({message: 'Firstname is required'});
    } else if(!this.state.input.lastName){
      this.setState({message: 'Lastname is required'});
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
          <button style = {{float: 'right'}}  onClick={() => {history.push('/classes')}}>
            <Icon style = {{color: '#626262', float: 'right'}} size={15} icon={close} />
          </button>
          <h3 style = {{margin: '15px'}} className = 'add-input-title' >{(this.props.teacherRow  ? `Editing teacher ${input.firstName} ${input.lastName}` : 'Add a new teacher')}</h3>
          <input  ref = 'input1' className = 'add-edit-input' defaultValue ={input.firstName} placeholder="Enter firstname" onChange={(evt) => {input.firstName = evt.target.value}}/>
          <input  ref = 'input2' className = 'add-edit-input' defaultValue={input.lastName} placeholder="Enter lastname" onChange={(evt) => {input.lastName = evt.target.value}}/>
          <input  ref = 'input3' className = 'add-edit-input' defaultValue={input.phone} placeholder="Enter phone" onChange={(evt) => {input.phone = evt.target.value}}/>
          <input  ref = 'input4' className = 'add-edit-input' defaultValue={input.email} placeholder="Enter email" onChange={(evt) => {input.email = evt.target.value}}/>
          <div>
            <h6 className = 'form-required-message'> {this.state.message} </h6>
          </div>
          {(this.props.teacherRow ?
            <div  style = {{marginTop: '10px'}}>
            <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault();  if(this.validate()){this.props.onSubmit(input)}}}>
              Save
            </button>
            <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault();  if(this.validate()){this.props.onSubmit(input);history.push(`/teachers`)}}}>
              Save and close
            </button>
            </div>
          :
          <div>
            <button className = 'add-button' onClick={(e) => {e.preventDefault();  if(this.validate()){this.props.onSubmit(input, false)}}}>
              Add
            </button>
            <button className = 'add-button' onClick={(e) => {e.preventDefault();
                                                              if(this.validate()){
                                                                this.props.onSubmit(input, true);
                                                                this.refs.input1.value = null;
                                                                this.refs.input2.value = null;
                                                                this.refs.input3.value = null;
                                                                this.refs.input4.value = null;
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

export default TeacherForm;
