import React from 'react';

const editUser = (props) => {
    return <div className="EditUser">
                <label className="Yellow">Name: </label>
                        <input type="text" 
                            name="name" 
                            value={props.state.userData.name} 
                            onChange={props.editUser}/>
                
                <label className="Yellow">Email: </label>
                        <input type="text" 
                                name="email" 
                                value={props.state.userData.email} 
                                onChange={props.editUser}/>
                
                <label className="Yellow">Phone: </label>
                        <input type="text" 
                                name="phone" 
                                value={props.state.userData.phone} 
                                onChange={props.editUser}/>
                
                <label className="Yellow">Website: </label>
                        <input type="text" 
                                name="website" 
                                value={props.state.userData.website} 
                                onChange={props.editUser}/>
            </div>
}

export default editUser;