import React, { useContext } from 'react'
import UserContext from '../Context/App'

function Profile() {
  const {user} = useContext(UserContext)
  const {pass} = useContext(UserContext)

  if (!user && !pass) return <div>Please Login</div>

  if (!user.username) return <div>Please Enter Username</div>

  if(!pass.password) return <div>Please Enter Password</div>

  return <div>Welcome {user.username} your Password is {pass.password} </div>

}

export default Profile