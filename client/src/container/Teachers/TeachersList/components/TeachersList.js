import React, { Component } from 'react';
import Modal from '../../../../components/modal.js';
import {history} from '../../../../history.js';
class Teacher extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      rowToBeKilled: null
    }
  }
  componentDidMount() {
   this.props.getTeacher();
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
        <button className = 'add-button' type="submit" onClick={() => {history.push(`/teachers/add`)}} style={{margin: '10px'}}>Add Teacher</button>
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
        {this.props.teachers.map((item, index) => {
          const editInput = this.props.teachers[index];
            return (
                  <tr>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td style = {{float: 'right', marginRight: '40px'}} ><button className = 'delete-button' onClick = {() => {this.setState({isModalOpen: true,
                                                                                              rowToBeKilled: index})}}>
                            Delete
                          </button>
                          <button className = 'edit-button' onClick = {() => {history.push(`/teachers/edit/${item.id}`)}}>
                            Edit
                          </button>
                      </td>
                  </tr>
            )
        })}

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


export default Teacher;
