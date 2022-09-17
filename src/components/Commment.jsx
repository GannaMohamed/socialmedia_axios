import React, { Component } from 'react'

export default class Commment extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <a href={this.props.email}>{this.props.email}</a>
        <p>{this.props.body}</p>
        <hr/>
      </div>
    )
  }
}
