//Third Party Lib Imports
import React from 'react'

//Local Imports
import UserDetailsTable from './UserDetailsTable'

const UserAddUpdate = (userData: any) => {
  return (
    <div className='bg-white p-10 m-5 rounded-xl'>
      <UserDetailsTable
      user={userData}
      hideControls={false}
      disabled={false} />
    </div>
  
 
  )
}

export default UserAddUpdate