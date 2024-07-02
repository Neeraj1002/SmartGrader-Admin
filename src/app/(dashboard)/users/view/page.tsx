
//Third party lib imports 
import React from 'react'

//local imports
import UserView from '@/views/users/UserView'


const userData = {
  id: 'dbsjdsjds',
  name: 'Jordan Stevenson',
  username: '@amiccoo',
  email: 'Jacinthe_Blick@hotmail.com',
  role: 'Admin',
  isVerified: true
}

const ViewUser = () => {
  return (
    <UserView userData = {userData} />
  )
}

export default ViewUser