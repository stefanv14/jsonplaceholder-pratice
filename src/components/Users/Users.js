import React from 'react';
import User from '../User/User';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AddUser from '../AddUser/AddUser';
import SaveIcon from '@material-ui/icons/Save';

const users = (props) => {
        return (
            <div>
                {props.state.addUser ? <AddUser newUser={props.newUser} /> : null }
                      {props.state.addUser ?   <Button variant="contained" 
                                                    size="small" 
                                                    style={{margin:20}} 
                                                    onClick={props.saveUser}>
                        <SaveIcon />
                        &nbsp;Save
                      </Button> : <Button variant="contained" 
                                          color="#ccc" fullWidth="true" 
                                          style={{marginTop:45}} 
                                          onClick={props.addUser}>
                        <AddIcon />
                        &nbsp;Add user
                      </Button>}
                {props.users.map((el) =>
                    <React.Fragment key={el.id}>
                        <User user={el} editUser={props.editUser} deleteUser={props.deleteUser} />
                    </React.Fragment>
                )}
            </div>
        )
}

export default users;