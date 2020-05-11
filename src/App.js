import React from 'react';
import './App.css';
import Users from './components/Users/Users';
import Container from '@material-ui/core/Container';
import MenuBar from './components/MenuBar/MenuBar';

class App extends React.Component {
  state = {
      hasErrors: false,
      users: [],
      search:"",
      usersHide: false,
      usersShow: false,
      addUser:false,
      newUser: {
        name: '',
        email: '',
        phone: '',
        website: ''
      }
    }

    componentDidMount () {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({ users: res }))
      .catch(() => this.setState({ hasErrors: true }));
      console.log(this.state);
    }
  
    handleSearch = (e) => {
      this.setState({search:e.target.value})
    }
    
    hideUsers = (e) => {
      this.setState({usersHide: true,addUser: null})
    }

    showUsers = (e) => {
      this.setState({usersHide: false})
    }

    editUser = (obj) => {
    this.setState({users: this.state.users.map(user => {
      if(user.id === obj.id) {
        user = obj
      }
      return user;
    })})
  }

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter((el) => {
        if(el.id !== id) return true;
      })
    })
  }
  
  addUser = () => {
    this.setState({addUser: !this.state.addUser})
  }

  newUser = (e) => {
    e.preventDefault();
      this.setState({newUser: {
      ...this.state.newUser,
      id:this.state.users.length +1,
      [e.target.name]: e.target.value
      }})
    console.log(this.state.newUser)
  }

  saveUser = (e) => {
    e.preventDefault();
    this.setState({
      users: [
        this.state.newUser,
        ...this.state.users        
      ],
      addUser: !this.state.addUser
    })
    console.log(this.state.users)
  } 
  
    render() {
        const filtered = this.state.users.filter((el) => {
          if (el.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) 
          return true;
        });
      return (
              <React.Fragment>
                  <Container maxWidth="md">
                      {console.log(this.state.users)}
                      <MenuBar  handleSearch={this.handleSearch} 
                                hideUsers={this.hideUsers} 
                                showUsers={this.showUsers} />
                      {this.state.usersHide ? null : <Users users={filtered} 
                                                            editUser={this.editUser} 
                                                            deleteUser={this.deleteUser}
                                                            state={this.state}
                                                            addUser={this.addUser}
                                                            saveUser={this.saveUser}
                                                            newUser={this.newUser}/>}
                  </Container>
              </React.Fragment>
    );
  }
}

export default App;
