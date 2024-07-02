'use client'

//Third Party Lib Imports
import React from 'react'

import Link from 'next/link'

//MUI Imports
import { Card, CardHeader, CardContent, Container, Button } from '@mui/material'

//Local Imports
import Table from '../../components/common/Table'
import Search from '@/components/common/Search'
import {  UserDataType } from '@/types/pages/tableBodyRowType'



const UserData: UserDataType[] = [
  {
    id: 'dbsjdsjds',
    name: 'Jordan Stevenson',
    username: '@amiccoo',
    email: 'Jacinthe_Blick@hotmail.com',
    role: 'Admin',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Richard Payne',
    username: '@brossiter15',
    email: 'Jaylon_Bartell3@gmail.com',
    role: 'Editor',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Jennifer Summers',
    username: '@jsbemblinf',
    email: 'Tristin_Johnson@gmail.com',
    role: 'Author',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Mr. Justin Richardson',
    username: '@justin45',
    email: 'Toney21@yahoo.com',
    role: 'Editor',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Nicholas Tanner',
    username: '@tannernic',
    email: 'Hunter_Kuhic68@hotmail.com',
    role: 'Maintainer',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Crystal Mays',
    username: '@crystal99',
    email: 'Norene_Bins@yahoo.com',
    role: 'Editor',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Mary Garcia',
    username: '@marygarcia4',
    email: 'Emmitt.Walker14@hotmail.com',
    role: 'Maintainer',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Megan Roberts',
    username: '@megan78',
    email: 'Patrick.Howe73@gmail.com',
    role: 'Subscriber',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Jordan Stevenson',
    username: '@amiccoo',
    email: 'Jacinthe_Blick@hotmail.com',
    role: 'Admin',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Richard Payne',
    username: '@brossiter15',
    email: 'Jaylon_Bartell3@gmail.com',
    role: 'Editor',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Jennifer Summers',
    username: '@jsbemblinf',
    email: 'Tristin_Johnson@gmail.com',
    role: 'Author',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Mr. Justin Richardson',
    username: '@justin45',
    email: 'Toney21@yahoo.com',
    role: 'Editor',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Nicholas Tanner',
    username: '@tannernic',
    email: 'Hunter_Kuhic68@hotmail.com',
    role: 'Maintainer',
    isVerified: true
  },
  {
    id: 'dbsjdsjds',
    name: 'Crystal Mays',
    username: '@crystal99',
    email: 'Norene_Bins@yahoo.com',
    role: 'Editor',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Mary Garcia',
    username: '@marygarcia4',
    email: 'Emmitt.Walker14@hotmail.com',
    role: 'Maintainer',
    isVerified: false
  },
  {
    id: 'dbsjdsjds',
    name: 'Megan Roberts',
    username: '@megan78',
    email: 'Patrick.Howe73@gmail.com',
    role: 'Subscriber',
    isVerified: true
  }
]


const UsersListView = () => {
  
  const searchQuery = ''

  const updateSearchQuery = (newQuery: string) => {
    console.log('searchQuery')
  }

  return (

    <Container className='mt-5' maxWidth="xl">
    <Card> 
      <CardHeader title='User List' />
      <CardContent className='flex items-center mb-5 p-4 bg-slate-100 mx-5 rounded-md'>
        <div className='w-full h-full flex items-center justify-between'>
          <div className='w-3/5'>
            <Search value={searchQuery} onChange={updateSearchQuery} />
          </div>
          <div className='h-full p-0 m-0'>
          <Button variant='contained'>
            <Link href='/users/add' passHref className='btn-link'>
            Add User
            </Link>
          </Button>
          </div>
        </div>
      </CardContent>
      {/* <Header></Header> */}
      <CardContent className='rounded-lg'>
        <Table TableData = {UserData} page = 'user'/>
      </CardContent>
    </Card>
    </Container>
  )
}

export default UsersListView
