import React, { Component } from 'react'
import Commment from './Commment'
export default class Commentlist extends Component {
  render() {
    return (
      this.props.commentlist.map(comment => {
        return <Commment
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
        />
      })
    )
  }
}
