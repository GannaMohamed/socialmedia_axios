import React, { Component } from 'react'
import axios from 'axios'
export default class RenderUser extends Component {

  state = {
    userData: {},
  };

    componentDidMount() { 
        const { id } = this.props
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(user => {
          this.setState({userData: user.data})
          })
        
    }

  
  render() {
    const {name, username, phone, email, website} = this.state.userData
    return (<div>
        <h1>____________ UserProfile ____________</h1>
        <h4>{name}</h4>
        <h2>@{username}</h2>
        <br/>
        <a href='#'>{email} </a>
        <br/>
        <a>{phone}: </a>
        <a href="#">visit:       {website}</a>
    </div>
    )
  }
}
