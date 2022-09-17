import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Commentlist from './Commentlist'


export default class RenderPost extends Component {
  state = {
    postData: {},
    commentlist: {},
  };

  componentDidMount() {
    const {id} = this.props
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(post => {
      this.setState({postData: post.data})

      
    })
    
    // axios.get(`https://jsonplaceholder.typicode.com/comments/`)
    // .then(commentlist => {
    //   this.setState({commentlist: commentlist.data.filter(comment => comment.postId === id)})
    // })
  }

  getUserName() {
    const user = axios.get(`https://jsonplaceholder.typicode.com/users/`)
    .then(users => users.data)
    .then(users => {
      console.log(users)
      console.log(this.state.postData)
        users.filter(user => {
        return user.id === this.state.postData.userId
      })
    })
    return user[0].username
  }

  render() {
    const {userId, title, body} = this.state.postData
    // const {commentlist} = this.state

    return (
      <div>
        <h1>{title}</h1>
        <h3>By: 
            <Link to={`/user${userId}`} 
                id={userId} 
                key={Math.random()}  
                Style="color: grey">
                @{this.getUserName()}
            </Link>
        </h3>
        <p>{body}</p>
        <hr/>
        {/* <Commentlist commentlist={commentlist.data} /> */}
    </div>
    )
  }
}


