import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* <h3>{this.props.username}</h3> */}
        <p>{this.props.body}</p>
        <div Style="backgroundColor:grey">{this.props.comment}</div>
        <Link to={`/posts/${this.props.id}`} Style="color: red">View post</Link>
        <hr/>
      </div>
    )
  }
}
