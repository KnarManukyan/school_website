import React, { Component } from 'react';
import Modal from '../../../../components/modal.js';
import {history} from '../../../../history.js';
import { Icon } from 'react-icons-kit';
import {pencil} from 'react-icons-kit/iconic/pencil'
import {plusCircle} from 'react-icons-kit/feather/plusCircle'
import {minus} from 'react-icons-kit/feather/minus'

class Teacher extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      rowToBeKilled: null
    }
  }
  componentDidMount() {
   this.props.getTeachers();
  }
  handleDelete = () => {
    this.props.deleteTeacher(this.props.teachers[this.state.rowToBeKilled].id);
    this.setState({isModalOpen: false})

  }
  render() {
    return (
      <div className = 'content'>
        <div className="student">
          <h1 className = 'large-text'> Teachers </h1>
        </div>
        <button type="submit" onClick={() => {history.push(`/teachers/add`)}} style={{margin: '10px'}}> <Icon style = {{color: '#626262'}} size={25} icon={plusCircle} /></button>
        <div>
        <table>
          <tbody>
          <tr className = "header">
            <th>firstname</th>
            <th>lastname</th>
            <th>phone</th>
            <th>email</th>
            <th style = {{float: 'right', marginRight: '65px'}} >options</th>
          </tr>
        {(this.props.teachers ? this.props.teachers.map((item, index) => {
            return (
                  <tr key = {index} >
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td style = {{float: 'right', marginRight: '50px'}} >
                          <button className = 'icon-button'  style = {{marginRight: '40px'}} onClick = {() => {this.setState({isModalOpen: true,
                                                                                rowToBeKilled: index})}}>
                          <Icon style={{ color: 'red' }} size={25} icon={minus} />
                          </button>
                          <button className = 'icon-button' onClick = {() => {history.push(`/teachers/edit/${item.id}`)}}>
                            <Icon style={{border: 'none', color: 'gray'}} size={20} icon={pencil} />
                          </button>
                      </td>
                  </tr>
            )
        }) : true)}
          </tbody>
        </table>
        {(!this.props.teachers ?  <div className="loader"></div> : true)}
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


export default Teacher;
