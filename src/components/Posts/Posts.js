import React from 'react';
import Post from '../Post/Post';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

class Posts extends React.Component {
    state = {
        posts: [],
        search: "",
        addPost: false,
        newPost: {
            title: '',
            body: ''
          }
    }
    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => this.setState({ posts: res }))
        .catch(() => this.setState({ hasErrors: true }));
        console.log(this.state);
    }

    addPost = () => {
        this.setState({addPost: !this.state.addPost})
      }
    
    newPost = (e) => {
    e.preventDefault();
        this.setState({newPost: {
        ...this.state.newPost,
        id:this.state.posts.length +1,
        [e.target.name]: e.target.value
        }})
    console.log(this.state.newPost)
    }

    savePost = (e) => {
    e.preventDefault();
    this.setState({
        posts: [
        this.state.newPost,
        ...this.state.posts        
        ],
        addPost: !this.state.addPost
    })
    console.log(this.state.posts)
    } 

    editPost = (obj) => {
    this.setState({posts: this.state.posts.map(post => {
        if(post.id === obj.id) {
        post = obj
        }
        return post;
    })})
    }

    deletePost = (id) => {
    this.setState({
        posts: this.state.posts.filter((el) => {
        if(el.id !== id) return true;
        })
    })
    }
    
    render() {
        return (
            <div>
                {this.state.addPost ? 
            <div className="Add">
                <label className="Yellow">Title: </label><input type="text" name="title" onChange={this.newPost}/>
                <label className="Yellow">Body: </label><textarea rows="6" name="body" onChange={this.newPost}></textarea>
            </div>  : null }
                      {this.state.addPost ?   <Button variant="contained" 
                                                    size="small" 
                                                    style={{margin:20}} 
                                                    onClick={this.savePost}>
                        <SaveIcon />
                        &nbsp;Save
                      </Button> : <Button variant="contained" 
                                          color="#ccc" fullWidth="true" 
                                          style={{marginTop:45}} 
                                          onClick={this.addPost}>
                        <AddIcon />
                        &nbsp;Add post
                      </Button>}
                {this.state.posts.slice(0, 20).map((el) =>
            <React.Fragment key={el.id}>
                <Post post={el} deletePost={this.deletePost} editPost={this.editPost} />
            </React.Fragment>
            )}
            </div>
            
        )
    }    
}   
export default Posts;
