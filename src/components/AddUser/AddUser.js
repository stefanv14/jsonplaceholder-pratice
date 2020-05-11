import React from 'react';

const addUser = (props) => {
    return <div className="Add">
            <label className="Yellow">Name: </label><input type="text" name="name" onChange={props.newUser}/>
            <label className="Yellow">Email: </label><input type="text" name="email" onChange={props.newUser}/>
            <label className="Yellow">Phone: </label><input type="text" name="phone" onChange={props.newUser}/>
            <label className="Yellow">Website: </label><input type="text" name="website" onChange={props.newUser}/>
           </div>
}

export default addUser;