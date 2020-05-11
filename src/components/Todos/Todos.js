import React from 'react';
import Todo from '../Todo/Todo';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Checkbox from '@material-ui/core/Checkbox';

class Todos extends React.Component {
    state = {
        todos: [],
        addTodo: false,
        newTodo: {
            title: '',
            completed: false
          }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => this.setState({ todos: res }))
        .catch(() => this.setState({ hasErrors: true }));
        console.log(this.state);
    }

    addTodo = () => {
        this.setState({addTodo: !this.state.addTodo})
      }
    
    newTodo = (e) => {
    e.preventDefault();
        this.setState({newTodo: {
        ...this.state.newTodo,
        id:this.state.todos.length +1,
        [e.target.name]: e.target.value
        }})
    console.log(this.state.newTodo)
    }

    saveTodo = (e) => {
    e.preventDefault();
    this.setState({
        todos: [
        this.state.newTodo,
        ...this.state.todos        
        ],
        addTodo: !this.state.addTodo
    })
    console.log(this.state.todos)
    } 

    editTodo = (obj) => {
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === obj.id) {
        todo = obj
        }
        return todo;
    })})
    }

    deleteTodo = (id) => {
    this.setState({
        todos: this.state.todos.filter((el) => {
        if(el.id !== id) return true;
        })
    })
    }

    
    render() {
        return (
            <div>
                {this.state.addTodo ? 
                <div className="Add">
                    <label className="Yellow">Title: </label><input type="text" name="title" onChange={this.newTodo} value={this.state.todoData.title} />
                    <Checkbox checked={this.state.todos.completed}
                            onChange={this.newTodo}
                            value={this.state.todos.completed}
                            color="primary"
                            inputProps={{
                                'aria-label': 'secondary checkbox',
                            }}
                            />
                </div> : null }
                      {this.state.addTodo ?   <Button variant="contained" 
                                                    size="small" 
                                                    style={{margin:20}} 
                                                    onClick={this.saveUser}>
                        <SaveIcon />
                        &nbsp;Save
                      </Button> : <Button variant="contained" 
                                          color="#ccc" fullWidth="true" 
                                          style={{marginTop:45}} 
                                          onClick={this.addUser}>
                        <AddIcon />
                        &nbsp;Add todo
                      </Button>}
                {this.state.todos.slice(0, 20).map((el) =>
                <React.Fragment key={el.id}>
                  <Todo todo={el} state={this.state} editTodo={this.editTodo} handleChange={this.handleChange} deleteTodo={this.deleteTodo} />
                </React.Fragment>
                )}
            </div>
            
        )
            
    }
}
export default Todos;   