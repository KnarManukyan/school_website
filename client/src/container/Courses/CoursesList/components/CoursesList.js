import React, { Component } from 'react';
import Modal from '../../../../components/modal.js';
import {history} from '../../../../history.js';
import { Icon } from 'react-icons-kit';
import {pencil} from 'react-icons-kit/iconic/pencil'
import {plusCircle} from 'react-icons-kit/feather/plusCircle'
import {minus} from 'react-icons-kit/feather/minus'
import SweetAlert from '../../../../components/sweetAlert.js';

class Course extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAlertOpen: false,
      rowToBeKilled: null
    }
  }
  componentDidMount() {
   this.props.getCourses();
  }
  handleDelete = () => {
    this.props.deleteCourse(this.props.courses[this.state.rowToBeKilled].id);
    this.setState({isAlertOpen: false})

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
            return (
                  <tr key = {index}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{(item.Classes ? item.Classes.name : 'n/a')}</td>
                      <td>{(item.Teacher ? `${item.Teacher.firstName} ${item.Teacher.lastName}` : 'n/a')}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.timetable.map((day, index)=>{
                        return (
                          <p key={index}> {`${day.weekday} ${day.startTime}-${day.endTime}`} </p>
                        )
                      }
                      )}</td>
                      <td style = {{float: 'right', marginRight: '50px'}}>
                          <button className= 'icon-button' style = {{marginRight: '40px'}} onClick = {() => {this.setState({isAlertOpen: true,
                                                                                                             rowToBeKilled: index})}}>
                          <Icon style={{ color: 'red' }} size={25} icon={minus} />
                          </button>
                          <button className= 'icon-button' onClick = {() => {history.push(`/courses/edit/${item.id}`)}}>
                          <Icon style={{border: 'none', color: 'gray'}} size={20} icon={pencil} />
                          </button>
                      </td>
                  </tr>
            )
        }) : true)}

          </tbody>
        </table>
        {(!this.props.courses ?  <div className="loader"></div> : true)}
        </div>
        {(this.state.isAlertOpen ?
          <SweetAlert type = 'deleteWarning' handleClose={this.handleDelete} handleCancel={()=>{this.setState({isAlertOpen: false})}}/>
          : true)}
        {((this.props.sweetAlertMessage) ?
        < SweetAlert type = {this.props.sweetAlertMessage[0]} message = {this.props.sweetAlertMessage[1]} handleClose = {this.props.resetAlertMessage} />
        : true)}
    </div>
    );
  }
}


export default Course;
