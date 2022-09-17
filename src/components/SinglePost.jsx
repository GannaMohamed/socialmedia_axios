import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RenderPost from './RenderPost'

export default function SinglePost() {
  const {postId} = useParams();

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  //   .then(post => {
  //     return post.data
  //   })
  // })

  return (
    <RenderPost id={postId}></RenderPost>
  )
}

