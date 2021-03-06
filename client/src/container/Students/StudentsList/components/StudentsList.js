import React, { Component } from 'react';
import {history} from '../../../../history.js';
import { Icon } from 'react-icons-kit';
import {pencil} from 'react-icons-kit/iconic/pencil'
import {plusCircle} from 'react-icons-kit/feather/plusCircle'
import {minus} from 'react-icons-kit/feather/minus'
import SweetAlert from '../../../../components/sweetAlert.js';

class Student extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAlertOpen: false,
      rowToBeKilled: null
    }
  }
  componentDidMount() {
   this.props.getStudents();
  }
  handleDelete = () => {
    this.props.deleteStudent(this.props.students[this.state.rowToBeKilled].id);
    this.setState({isAlertOpen: false})

  }
  render() {
    return (
      <div className = 'content'>
        <div className="student">
          <h1 className = 'large-text' > Students </h1>
        </div>
        <button type="submit" onClick={() => {history.push(`/students/add`)}} style={{margin: '10px'}}> <Icon style = {{color: '#626262'}} size={25} icon={plusCircle} /></button>
        <div>
        <table>
          <tbody>
          <tr className = "header">
            <th>firstname</th>
            <th>lastname</th>
            <th>age</th>
            <th>gender</th>
            <th>phone</th>
            <th>email</th>
            <th>class</th>
            <th style = {{float: 'right', marginRight: '65px'}} >options</th>
          </tr>
        {(this.props.students ? this.props.students.map((item, index) => {
            return (
                  <tr key = {index}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{(item.Classes ? item.Classes.name : "n/a")}</td>
                      <td style = {{float: 'right', marginRight: '50px'}}>
                          <button className= 'icon-button' style = {{marginRight: '40px'}} onClick = {() => {this.setState({isAlertOpen: true,
                                                                                              rowToBeKilled: index})}}>
                          <Icon style={{ color: 'red' }} size={25} icon={minus} />
                          </button>
                          <button className= 'icon-button' onClick = {() => {history.push(`/students/edit/${item.id}`)}}>
                          <Icon style={{border: 'none', color: 'gray'}} size={20} icon={pencil} />
                          </button>
                      </td>
                  </tr>
            )
        }) : true)}
          </tbody>
        </table>
        {(!this.props.students ?  <div className="loader"></div> : true)}
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


export default Student;
