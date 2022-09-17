import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class User extends Component {

  render() {
    return (<div>
      <h1>{this.props.name}</h1>
      <Link to={`/user${this.props.id}`} id={this.props.id} key={this.props.id}  Style="color: grey">@{this.props.username}

      </Link>
      
      <br/>
      <hr/>
    </div>
    )
  }
}
