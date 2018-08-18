import React, { Component } from 'react';
import {history} from '../../../history.js';
import '../../../assets/css/form.css'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close'
import {minus} from 'react-icons-kit/feather/minus'

class CourseForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: {},
      week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timetable: [],
      message: '',
    }
  }
  componentDidUpdate(){
    if(this.props.addedId){
      this.props.resetAddedId();
      history.push(`/courses/edit/${this.props.addedId}`);
      }
  }
  validate = () => {
    if(!this.state.input.name){
      this.setState({message: 'Name is required'});
    } else if(!this.state.input.classId){
      this.setState({message: 'Class is required'});
    } else if(!this.state.input.teacherId){
      this.setState({message: 'Teacher is required'});
    } else if(!this.state.input.startDate){
      this.setState({message: 'Start Date is required'});
    } else if(!this.state.input.endDate){
      this.setState({message: 'End Date is required'});
    } else if(!this.state.timetable[0]){
      this.setState({message: 'Hour is required'});
    } else {
      this.setState({message: ''});
    }
  }
  render() {
    if(this.props.courseRow){
      this.state.input = this.props.courseRow;
      this.state.timetable = this.props.courseRow.timetable;
    }
    return (
      <div className = 'content'>
        <form className = 'add-edit-form'>
          <button style = {{float: 'right'}} onClick={() => {history.push('/courses')}}>
          <Icon className = 'icon-button' style = {{color: '#626262', float: 'right'}} size={15} icon={close} />
          </button>
          <h3 style = {{margin: '15px'}} className = 'add-input-title' >{(this.props.courseRow  ? `Editing course ${this.state.input.name}` : 'Add a new course')}</h3>

          <input  ref = 'input1' className = 'add-edit-input' defaultValue ={this.state.input.name} placeholder='Enter name' onChange={(evt) => {this.state.input.name = evt.target.value}} />
          <input  ref = 'input2' className = 'add-edit-input' defaultValue={this.state.input.description} placeholder='Enter description' onChange={(evt) => {this.state.input.description = evt.target.value}}/>

          <div>
            <select name="classes" value = {this.state.input.classId} className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {this.state.input.classId = evt.target.value;}}>>
            <option value=''  default> Choose a class </option>
             {this.props.classes ? this.props.classes.map((item,index) =>{
                return(
                     <option key={index} value = {item.id}  > {item.name} </option>
                 )}) : true}
             </select>
             <select name="teachers" value = {this.state.input.teacherId} className = 'add-edit-input' style = {{padding: '10px 20px'}} onChange={(evt) => {this.state.input.teacherId = evt.target.value; }}>>
             <option value='' default> Choose a teacher </option>
             {this.props.teachers ? this.props.teachers.map((item,index) =>{
                return(
                     <option key={index} value = {item.id}  > {item.firstName + ' ' + item.lastName} </option>
                 )}) : true}
             </select>
           </div>
           <div>
            Start Date
            <input className = 'add-edit-input' type = 'date'  ref = 'input5' defaultValue = {this.state.input.startDate} onChange={(evt)=>{this.state.input.startDate = evt.target.value}} />
            End Date
            <input className = 'add-edit-input' type = 'date' ref = 'input6' defaultValue = {this.state.input.endDate} onChange={(evt)=>{this.state.input.endDate = evt.target.value}} />
           </div>
           <div>
             <button className= 'add-edit-input' style = {{padding: '5px 10px', width: '15%'}} onClick={(e) => {e.preventDefault();this.setState({timetable: [...this.state.timetable, {weekday: null, startTime: null, endTime: null}]});}}>
              Add Hour
             </button>
           </div>
           {(this.state.timetable ? this.state.timetable.map((item,index) =>{
             return(<div>
               <select value={item.weekday} name="classes" className = 'add-edit-input' style = {{padding: '5px 10px', width: '30%'}} onChange={(evt) => {this.state.timetable[index].weekday = evt.target.value}}>
               <option  value={item.weekday}  default> {(item.weekday ? item.weekday : 'Choose a weekday')} </option>
                {this.state.week.map((item) =>{
                   return(
                        <option value = {item.id}  > {item} </option>
                    )})}
                </select>
                  <input type='time' className = 'add-input' style = {{padding: '5px 10px', width: '25%'}} defaultValue = {item.startTime} onChange={(evt) => {this.state.timetable[index].startTime = evt.target.value;}}/>
                  {' - '}
                  <input type='time' className = 'add-input' style = {{padding: '5px 10px', width: '25%'}} defaultValue = {item.endTime} onChange={(evt) => {this.state.timetable[index].endTime = evt.target.value;}}/>
                <button className= 'add-edit-input' style = {{padding: '5px 10px', width: '15%'}} onClick={(e) => {e.preventDefault();
                                                                                                                   let a = this.state.timetable.slice(0, index);
                                                                                                                   let b = a.concat(this.state.timetable.slice(index+1))
                                                                                                                   this.setState({timetable: b}); }}>
                  Remove
                </button>
             </div>)
           }) : true)}
           <div>
             <h6 style = {{color: 'red', pardding: '10px', fontSize: '15px', padding: '10px'}}> {this.props.message} </h6>
           </div>
           <div>
             <h6 style = {{color: 'red', pardding: '10px', fontSize: '15px', padding: '10px'}}> {this.state.message} </h6>
           </div>
           {(this.props.courseRow ?
            <div  style = {{marginTop: '10px'}}>
              <button className = 'edit-button' style = {{marginLeft: '32%'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(this.state.input);}}>
                Save
              </button>
              <button className = 'edit-button' style = {{marginLeft: '8px'}} onClick={(e) => {e.preventDefault(); this.props.onSubmit(this.state.input);history.push(`/courses`)}}>
                Save and close
              </button>
            </div>
          :
          <div>
            <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.validate(); this.state.input.timetable = this.state.timetable;  if(!this.state.message){setTimeout(() => {
                                                                                                                                                                                 this.props.onSubmit(this.state.input, false)
                                                                                                                                                                        }, 0)}}}>
              Add
            </button>
            <button className = 'add-button' onClick={(e) => {e.preventDefault();
                                                              this.props.onSubmit(this.state.input, true);
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
