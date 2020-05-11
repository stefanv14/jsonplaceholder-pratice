import React from 'react';
import './Post.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {Fab, Button} from '@material-ui/core';

class Post extends React.Component {
  state = {
    editPost: false,
    postData: {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body
    }
  }

  editShow = (e) => {
    this.setState({editPost: !this.state.editPost})
  }

  editPost = (e) => {
    this.setState({postData: {
      ...this.state.postData,
      [e.target.name]: e.target.value
    }})
    this.props.editPost(this.state.postData);
  }
  render() {
    return (
      <React.Fragment>
        <div className="Post"> 
          <div className="PostData">  
              <h3 className="Yellow">{this.props.post.title}</h3>
              <p>{this.props.post.body}</p>
          </div>
        </div>
        {this.state.editPost ? 
            <div className="EditPost">
                <label className="Yellow">Title: </label><input type="text" name="title" onChange={this.editPost} value={this.state.postData.title} />
                <label className="Yellow">Body: </label><textarea rows="6" name="body" onChange={this.editPost} value={this.state.postData.body}></textarea>
            </div>
           : null }
        {this.state.editPost ? null : 
        <Fab variant="extended" 
             color="#333" 
             aria-label="edit" 
             onClick={this.editShow} 
             size="small" 
             style={{margin:20}}
        >
        <EditIcon />
        &nbsp;Edit post
        </Fab>}
        <Fab variant="extended" 
             aria-label="delete" 
             size="small" 
             style={{margin:20}} 
             onClick={ () =>this.props.deletePost(this.props.post.id)}
        >
          <DeleteIcon />
          &nbsp;delete post
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

export default Post;    