import React from 'react';
import './User.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {Fab, Button} from '@material-ui/core';
import EditUser from '../EditUser/EditUser';

class User extends React.Component {
  state = {
    editUser: false,
    userData: {
      id:this.props.user.id,
      name: this.props.user.name,
      email: this.props.user.email,
      phone: this.props.user.phone,
      website: this.props.user.website
    }
  }

  editShow = (e) => {
    this.setState({editUser: !this.state.editUser})
  }

  editUser = (e) => {
    e.preventDefault();
    this.setState({userData: {
      ...this.state.userData,
      [e.target.name]: e.target.value
    }})
    this.props.editUser(this.state.userData);
  }
  render() {
      const imgName= this.props.user.name;
    return (
      <React.Fragment>
        <div className="User"> 
          <div className="UserImg">
            <p>{imgName.charAt(0)}</p>
          </div>

          <div className="UserData">
            <h3 className="Yellow">{this.props.user.name}</h3>
            <small><strong className="Yellow">email:&nbsp;</strong>{this.props.user.email}</small>
            <small><strong className="Yellow">phone:&nbsp;</strong>{this.props.user.phone}</small>
            <small><strong className="Yellow">website:&nbsp;</strong>{this.props.user.website}</small>
          </div>
        </div>
        {this.state.editUser ? <EditUser editUser={this.editUser} state={this.state} /> : null }
        {this.state.editUser ? null :
        <Fab variant="extended" 
             color="#333" 
             aria-label="edit" 
             onClick={this.editShow} 
             size="small" 
             style={{margin:20}}
        >
        <EditIcon />
        &nbsp;Edit User
        </Fab>}
        <Fab variant="extended" 
             aria-label="delete" 
             size="small" 
             style={{margin:20}} 
             onClick={ () =>this.props.deleteUser(this.props.user.id)}
        >
          <DeleteIcon />
          &nbsp;delete user
        </Fab>
        <Button variant="contained" 
                size="small" 
                style={{margin:20}} onClick={this.editShow}
        >
          <SaveIcon />
          &nbsp;Save
        </Button>
      </React.Fragment>
    )
  }
}

export default User;