//third party lib imports
import React from 'react'

//local import
import UserAddUpdate from '@/views/users/UserAddUpdate'

const AddUser = () => {
  const userData = {
    id: '',
    name: '',
    username: '',
    email: '',
    role: '',
    isVerified: false
  }
  
  return (

    <UserAddUpdate user={userData}/>
  )
}

export default AddUser