//Thrid Party Lib Imports
import React, { FC } from 'react'

//MUI Imports
import { Card, CardContent, CardHeader, Container } from '@mui/material'

//LOcal Imports
import UserDetailsTable from './UserDetailsTable'

interface userDetails {

    // Define the structure of your user data type here
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    userRole: string;
    department: string;
    enabledFor2FA: boolean;
    accounting: boolean;
    active: boolean;
  }

const UserView = (userData: any) => {
  return (
    <div className='page-content'>
      <Container maxWidth='xl'>

        {/* <BreadCrumb title="Employee View" pageTitle="Employee Management" /> */}
          <Card>
            <CardHeader className='d-flex align-items-center justify-content-between'>
              <h4 className='card-title flex-grow-1 mb-0'>User View</h4>
            </CardHeader>
            <CardContent>
              <UserDetailsTable
                user={userData}
                hideControls={true}
                disabled={true}
              />
            </CardContent>
          </Card>
      </Container>
    </div>
  )
}

export default UserView
