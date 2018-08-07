import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTeacher, deleteTeacher, addTeacher, startingEditing, editTeacher, finishEditing, changeTheStateOfTheModal, setTheRawToBeDeleted } from '../../actions';
import '../component.css';
import Modal from '../modal.js';

class Teacher extends Component {
  constructor(props){
    super(props);
    this.input = {};
  }
  componentDidMount() {
   this.props.getTeacher();

  }
  render() {
    const handleDelete = () => {
      this.props.deleteTeacher(this.props.teachers[this.props.deletingRaw].id);
      this.props.changeTheStateOfTheModal();
    }
    return (
      <div>
        <div className="student">
          <h1> Teachers </h1>
        </div>
        <div>
        <table>
          <tbody>
          <tr className = "header">
            <th>firstname</th>
            <th>lastname</th>
            <th>phone</th>
            <th>email</th>
            <th>options</th>
          </tr>
          <tr>
            <td><input className = 'add-input' ref = 'input1' placeholder="Enter firstname" onChange={(evt) => {this.input.firstName = evt.target.value}}/></td>
            <td><input className = 'add-input' ref = 'input2' placeholder="Enter lastname" onChange={(evt) => {this.input.lastName = evt.target.value}}/></td>
            <td><input className = 'add-input' ref = 'input5' placeholder="Enter phone" onChange={(evt) => {this.input.phone = evt.target.value}}/></td>
            <td><input className = 'add-input' ref = 'input6' placeholder="Enter email" onChange={(evt) => {this.input.email = evt.target.value}}/></td>
            <td><button className = 'add-button' type="submit" onClick={() => {
                                                      this.props.addTeacher(this.input);
                                                      this.refs.input1.value = null;
                                                      this.refs.input2.value = null;
                                                      this.refs.input5.value = null;
                                                      this.refs.input6.value = null;
                                                    }}>Add Teacher</button></td>
          </tr>
        {this.props.teachers.map((item, index) => {
          const editInput = this.props.teachers[index];
            return (
                  <tr>
                      <td>{
                        (this.props.editingRaw === index  ? <input  defaultValue={editInput.firstName} placeholder = "Enter firstname" onChange={(evt) => {editInput.firstName = evt.target.value}}/>
                          : item.firstName)}</td>
                      <td>{(this.props.editingRaw === index  ? <input  defaultValue={editInput.lastName} placeholder = "Enter lastname" onChange={(evt) => {editInput.lastName = evt.target.value}}/>
                          : item.lastName)}</td>
                      <td>{(this.props.editingRaw === index  ? <input  defaultValue={editInput.phone} placeholder = "Enter phone" onChange={(evt) => {editInput.phone = evt.target.value}}/>
                          : item.phone)}</td>
                      <td>{(this.props.editingRaw === index  ? <input  defaultValue={editInput.email} placeholder = "Enter email" onChange={(evt) => {editInput.email = evt.target.value}}/>
                          : item.email)}</td>
                      <td>
                       {this.props.editingRaw === index ?
                         <button className = 'edit-button-2' type="submit" onClick={() => {this.props.editTeacher(editInput);
                                                                                           this.props.finishEditing()}}>Edit Teacher</button>
                       :
                        <div>
                          <button className = 'delete-button' onClick = {() => {this.props.setTheRawToBeDeleted(index);
                                                                                this.props.changeTheStateOfTheModal()}}>
                            Delete
                          </button>
                          <button className = 'edit-button' onClick = {() => {this.props.startingEditing(index);}}>
                            Edit
                          </button>
                        </div>
                      }
                      </td>
                  </tr>
            )
        })}

          </tbody>
        </table>
        </div>
        <Modal show={this.props.isModalOpened} handleClose={this.props.changeTheStateOfTheModal}>
          <p>Are you sure, that you want to him/her?</p>
          <button className = 'modal-button' onClick = {handleDelete}> Yes</button>
          <button className = 'modal-button' onClick = {this.props.changeTheStateOfTheModal}> No </button>
        </Modal>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    teachers: state.teacherReducer.teachers,
    editingRaw: state.commonlyUsedReducer.editingRaw,
    isModalOpened: state.commonlyUsedReducer.isModalOpened,
    deletingRaw: state.commonlyUsedReducer.deletingRaw
  })
}



export default connect(mapStateToProps, { getTeacher, deleteTeacher, addTeacher, startingEditing , editTeacher, finishEditing, changeTheStateOfTheModal, setTheRawToBeDeleted})(Teacher);
