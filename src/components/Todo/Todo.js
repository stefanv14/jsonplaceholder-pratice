import React from 'react';
import './Todo.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {Fab, Button, Checkbox } from '@material-ui/core';


class Todo extends React.Component {
  state = {
    editTodo: false,
    todoData: {
      id: this.props.todo.id,
      title: this.props.todo.title,
      completed: this.props.todo.completed
    }
  }

  editShow = (e) => {
    this.setState({editTodo: !this.state.editTodo})
  }

  editTodo = (e) => {
    this.setState({todoData: {
      ...this.state.todoData,
      [e.target.name]: e.target.value
    }})
    this.props.editTodo(this.state.todoData);
  }

  handleChange = () => {
    this.setState({todoData: {
      completed: !this.state.completed
    }})
    this.props.editTodo(this.state.todoData);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Todo">
          <h3 className="Yellow">{this.props.todo.title}</h3>
          <p>finished:<span className="Yellow">&nbsp;{this.props.todo.completed ? 'true' : 'false'}</span></p>
        </div>
        {this.state.editTodo ? 
            <div className="EditPost">
                <label className="Yellow">Title: </label><input type="text" name="title" onChange={this.editTodo} value={this.state.todoData.title} />
                <Checkbox   checked={this.state.todoData.completed}
                            onChange={this.handleChange}
                            value={this.state.todoData.completed}
                            color="primary"
                            inputProps={{
                                'aria-label': 'secondary checkbox',
                            }}
                            />
            </div>
           : null }
        {this.state.editTodo ? null : 
        <Fab variant="extended" 
             color="#333" 
             aria-label="edit" 
             onClick={this.editShow} 
             size="small" 
             style={{margin:20}}
        >
        <EditIcon />
        &nbsp;Edit todo
        </Fab>}
        <Fab variant="extended" 
             aria-label="delete" 
             size="small" 
             style={{margin:20}} 
             onClick={ () => this.props.deleteTodo(this.props.todo.id)}
        >
          <DeleteIcon />
          &nbsp;delete todo
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

export default Todo;