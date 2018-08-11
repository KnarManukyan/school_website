import React, { Component } from 'react';
import Modal from '../../../../components/modal.js';
import {history} from '../../../../history.js';
import { Icon } from 'react-icons-kit';
import {pencil} from 'react-icons-kit/iconic/pencil'
import {plusCircle} from 'react-icons-kit/feather/plusCircle'
import {minus} from 'react-icons-kit/feather/minus'

class Course extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      rowToBeKilled: null
    }
  }
  componentDidMount() {
   this.props.getCourse();
  }
  handleDelete = () => {
    this.props.deleteCourse(this.props.courses[this.state.rowToBeKilled].id);
    this.setState({isModalOpen: false})

  }
  render() {
    return (
      <div className = 'content'>
        <div className= 'courses'>
          <h1 className = 'large-text' > Courses </h1>
        </div>
        <button type='submit' onClick={() => {history.push(`/courses/add`)}} style={{margin: '10px'}}> <Icon style = {{color: '#626262'}} size={25} icon={plusCircle} /></button>
        <div>
        <table>
          <tbody>
          <tr className = 'header'>
            <th>name</th>
            <th>description</th>
            <th>class</th>
            <th>teacher</th>
            <th>startDate</th>
            <th>endDate</th>
            <th>Timetable</th>
            <th style = {{float: 'right', marginRight: '65px'}} >options</th>
          </tr>
        {(this.props.courses ? this.props.courses.map((item, index) => {
          const editInput = this.props.courses[index];
          let timetable = item.timetable;
          let timetableToShow = '';
          if(timetable.length !== 0){
            for(let i = 0; i<timetable.length; i++){
              timetableToShow += `${timetable[i].weekday} ${timetable[i].startTime}-${timetable[i].endTime} `
            }
          }
            return (
                  <tr key = {index}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{(item.Classes ? item.Classes.name : 'n/a')}</td>
                      <td>{(item.Teacher ? `${item.Teacher.firstName} ${item.Teacher.lastName}` : 'n/a')}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{timetableToShow}</td>
                      <td style = {{float: 'right', marginRight: '50px'}}>
                          <button className= 'icon-button' style = {{marginRight: '40px'}} onClick = {() => {this.setState({isModalOpen: true,
                                                                                              rowToBeKilled: index})}}>
                          <Icon style={{ color: 'red' }} size={25} icon={minus} />
                          </button>
                          <button className= 'icon-button' onClick = {() => {history.push(`/courses/edit/${item.id}`)}}>
                          <Icon style={{border: 'none', color: 'gray'}} size={20} icon={pencil} />
                          </button>
                      </td>
                  </tr>
            )
        }) : <div className='loader'></div>)}

          </tbody>
        </table>
        </div>
        <Modal show={this.state.isModalOpen}>
          <p>Are you sure, that you want to delete him/her?</p>
          <button className = 'modal-button' onClick = {this.handleDelete}> Yes</button>
          <button className = 'modal-button' onClick ={()=>{this.setState({isModalOpen: false})}}> No </button>
        </Modal>
    </div>
    );
  }
}


export default Course;
