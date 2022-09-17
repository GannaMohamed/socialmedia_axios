import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios'
import Commentlist from './Commentlist'
export default class Postlist extends Component {
    state = {
        postlist: [],
    } 

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=> {
      this.setState({
        postlist: res.data.slice(0,10)
      })
    })

    

  //   this.setState({postlist: [posts.array.map(element => {
  //     return postlist.push(element)]
  //   })})
    
  }
  render() {
    
    return this.props.postlist.map(post => {
            return <Post
                        onLoad={this.readDB}
                        id={post.id} 
                        key={post.id}
                        title = {post.title}
                        body= {post.body}
                        // comment={}
                    />
        })
  }
}
