import React, { Component } from 'react'
import User from './User'
import axios from "axios"

export default class Userlist extends Component {
  
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(res=> {
  //     this.setState({
  //       postlist: res.data.slice(0,10)
  //     })
  //   })
  // }

  render() {
    return (
        this.props.userlist.map(user => {
            return <User
                id={user.id}
                name={user.name}
                username={user.username}
            />
        })
    )
  }
}
