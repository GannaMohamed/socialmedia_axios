import React, { Component } from 'react'
import {Link} from "react-router-dom"
  
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Posts'>Posts</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/Comments'>Comments</Link></li>
        </ul>
      </div>
    )
  }
}
