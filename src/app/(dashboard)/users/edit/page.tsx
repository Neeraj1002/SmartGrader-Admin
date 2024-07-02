//Thrid party lib imports
import React from 'react'

//local imports
import UserAddUpdate from '@/views/users/UserAddUpdate'

const EditUser = () => {
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

export default EditUser