import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'

class ClassForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: (this.props.classRow ? this.props.classRow : {}),
      message: ''
    }
  }
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/classes/edit/${this.props.addedId}`);
      }
  }
  validate = () => {
    if(!this.state.input.name){
      this.setState({message: 'Name is required'});
    } else if(!this.state.input.teacherId){
      this.setState({message: 'Teacher is required'});
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
          <h3 style = {{margin: '15px'}} className = 'add-input-title' >{(this.props.classRow  ? `Editing class ${input.name}` : 'Add a new class')}</h3>
          <input ref = 'input1' className = 'add-edit-input' defaultValue ={input.name} placeholder="Enter name" onChange={(evt) => {input.name = evt.target.value}}/>
          <select ref = 'input2' name="teachers" value = {this.state.input.teacherId} className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {this.state.input.teacherId = evt.target.value; }}>>
          <option value='' default> Choose a teacher </option>
          {this.props.teachers ? this.props.teachers.map((item,index) =>{
             return(
                  <option key={index} value = {item.id}  > {item.firstName + ' ' + item.lastName} </option>
              )}) : true}
          </select>
          <div>
            <h6 className = 'form-required-message'> {this.state.message} </h6>
          </div>
          {(this.props.classRow ?
            <div  style = {{marginTop: '10px'}}>
            <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault(); if(this.validate()){this.props.onSubmit(input)}}}>
              Save
            </button>
            <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault(); if(this.validate()){this.props.onSubmit(input);history.push(`/classes`)}}}>
              Save and close
            </button>
            </div>
          :
          <div>
            <button className = 'add-button' onClick={(e) => {e.preventDefault(); if(this.validate()){this.props.onSubmit(input, false);}}}>
              Add
            </button>
            <button className = 'add-button' onClick={(e) => {e.preventDefault();
                                                              if(this.validate()){
                                                                this.props.onSubmit(input, true);
                                                                this.refs.input1.value = null;
                                                                this.refs.input2.value = null;
                                                                this.state.input = {};
                                                                this.props.getFreeTeachers()
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

export default ClassForm;
