import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import RenderUser from './RenderUser';
export default function UserProfile() {

    const {userId} = useParams();
    // const [userData, setUserData] = useState();

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //     .then(user => {
    //         console.log(user.data)
    //         // setUserData({userData: user.data})
    //     })
    // }, [])




  return (
    <div>
        <RenderUser id={userId}></RenderUser>
    </div>
  )
}
