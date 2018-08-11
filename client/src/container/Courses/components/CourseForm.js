import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
class CourseForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  }
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/courses/edit/${this.props.addedId}`);
      }
  }
  render() {
    let input = (this.props.courseRow ? this.props.courseRow : {});
    return (
      <div className = 'content'>
        <form className = 'add-edit-form'>
          <button style = {{float: 'right'}} onClick={() => {history.push('/courses')}}>
          <Icon className = 'icon-button' style = {{color: '#626262', float: 'right'}} size={15} icon={close} />
          </button>
          <h3 style = {{margin: '15px'}} className = 'add-input-title' >{(this.props.courseRow  ? `Editing course ${input.name}` : 'Add a new course')}</h3>

          <input  ref = 'input1' className = 'add-edit-input' defaultValue ={input.name} placeholder='Enter name' onChange={(evt) => {input.name = evt.target.value}} required="required"/>
          <input  ref = 'input2' className = 'add-edit-input' defaultValue={input.description} placeholder='Enter description' onChange={(evt) => {input.description = evt.target.value}}/>

          <div>
            <select name="classes" className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {input.classId = evt.target.value}}>>
            <option value=''  default> Choose a class </option>
             {this.props.classes ? this.props.classes.map((item) =>{
                return(
                     <option value = {item.id}  > {item.name} </option>
                 )}) : true}
             </select>
             <select name="teachers" className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {input.teacherId = evt.target.value}}>>
             <option value='' default> Choose a teacher </option>
             {this.props.teachers ? this.props.teachers.map((item) =>{
                return(
                     <option value = {item.id}  > {item.firstName + ' ' + item.lastName} </option>
                 )}) : true}
             </select>
           </div>

           <div>
            <DayPickerInput ref = 'input5' placeholder='Enter startDate' value = {input.startDate} onDayChange={(date)=>{input.startDate = date;}} />
            <DayPickerInput ref = 'input6' placeholder='Enter endDate' value = {input.endDate} onDayChange={(date)=>{input.endDate = date}} />
           </div>
           <div>
             <select name="classes" className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {input.classId = evt.target.value}}>>
             <option value=''  default> Choose a weekday </option>
              {this.state.week.map((item) =>{
                 return(
                      <option value = {item.id}  > {item} </option>
                  )})}
              </select>
           </div>
            {(this.props.courseRow ?
            <div  style = {{marginTop: '10px'}}>
              <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);}}>
                Save
              </button>
              <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(input);history.push(`/courses`)}}>
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
                                                              this.refs.input5.value = null;
                                                              this.refs.input6.value = null;
                                                            }}>
              Add More
            </button>
          </div>)}
        </form>
      </div>
    )
  }
}

export default CourseForm;
