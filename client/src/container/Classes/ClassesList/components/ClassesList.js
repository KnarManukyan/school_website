import React, { Component } from 'react';
import Modal from '../../../../components/modal.js';
import {history} from '../../../../history.js';
import { Icon } from 'react-icons-kit';
import {pencil} from 'react-icons-kit/iconic/pencil'
import {plusCircle} from 'react-icons-kit/feather/plusCircle'
import {minus} from 'react-icons-kit/feather/minus'

class Class extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      rowToBeKilled: null
    }
  }
  componentDidMount() {
   this.props.getClass();
  }
  handleDelete = () => {
    this.props.deleteClass(this.props.classes[this.state.rowToBeKilled].id);
    this.setState({isModalOpen: false})
  }
  render() {
    return (
      <div className = 'content'>
        <div className="student">
          <h1 className = 'large-text' > Classes </h1>
        </div>
        <button type="submit" onClick={() => {history.push(`/classes/add`)}} style={{margin: '10px'}}> <Icon style = {{color: '#626262'}} size={25} icon={plusCircle} /></button>
        <div>
        <table>
          <tbody>
          <tr className = "header">
            <th>name</th>
            <th>teacher</th>
            <th style = {{float: 'right', marginRight: '65px'}} >options</th>
          </tr>
        {this.props.classes ? this.props.classes.map((item, index) => {
          const editInput = this.props.classes[index];
            return (
                  <tr>
                      <td>{item.name}</td>
                      <td>{(item.Teacher ? `${item.Teacher.firstName} ${item.Teacher.lastName}` : "n/a")}</td>
                      <td style = {{float: 'right', marginRight: '50px'}}>
                          <button className= 'icon-button' style = {{marginRight: '40px'}} onClick = {() => {this.setState({isModalOpen: true,
                                                                                              rowToBeKilled: index})}}>
                          <Icon style={{ color: 'red' }} size={25} icon={minus} />
                          </button>
                          <button className= 'icon-button' onClick = {() => {history.push(`/classes/edit/${item.id}`)}}>
                          <Icon style={{border: 'none', color: 'gray'}} size={20} icon={pencil} />
                          </button>
                      </td>
                  </tr>
            )
        }):  <div className="loader"></div>}

          </tbody>
        </table>
        </div>
        <Modal show={this.state.isModalOpen}>
          <p>Are you sure, that you want to delete this class?</p>
          <button className = 'modal-button' onClick = {this.handleDelete}> Yes</button>
          <button className = 'modal-button' onClick ={()=>{this.setState({isModalOpen: false})}}> No </button>
        </Modal>
    </div>
    );
  }
}


export default Class;
