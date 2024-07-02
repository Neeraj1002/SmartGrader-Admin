'use client'

//Third Party Lib Import
import React from 'react'
import type { FC } from 'react'

import Link from 'next/link'

import { useFormik } from 'formik'
import * as Yup from 'yup'

//MUI Imports
import {
  TextField,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  FormHelperText,
  Container
} from '@mui/material'

export interface UserDetailsTableProps {
  user: any
  hideControls: boolean
  disabled: boolean
}

const UserDetailsTable: FC<UserDetailsTableProps> = (props: UserDetailsTableProps) => {
  const { user, hideControls, disabled } = props

  const userData = useFormik({
    initialValues: user.userData,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      role: Yup.string().required('User role is required'),
      isVerified: Yup.boolean().required('Verified is required')
    }),
    onSubmit: () => {
      // onSubmit(values)
    }
  })

  return (
    <Container maxWidth='xl'>
      <div className='h-full w-full'>
        <Typography
          variant='h4'
          gutterBottom
          className='text-slate-500 font-semibold pl-3 pb-5 underline decoration-4 decoration-cyan-500'
        >
          User Details
        </Typography>
        <Container className='mt-20'>
          <form onSubmit={userData.handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} className='py-4'>
                <TextField
                  fullWidth
                  label='Name'
                  name='name'
                  value={userData.values?.name}
                  placeholder='Name'
                  onChange={userData.handleChange}
                  disabled={disabled}
                />
              </Grid>
              <Grid item xs={12} sm={6} className='py-4'>
                <TextField
                  fullWidth
                  label='User Name'
                  name='username'
                  value={userData.values?.username}
                  placeholder='User Name'
                  onChange={userData.handleChange}
                  disabled={disabled}
                />
              </Grid>
              <Grid item xs={12} sm={6} className='py-4'>
                <TextField
                  fullWidth
                  label='Email'
                  name='email'
                  value={userData.values?.email}
                  placeholder='Email'
                  onChange={userData.handleChange}
                  disabled={disabled}
                />
              </Grid>
              <Grid item xs={12} sm={6} className='py-4'>
                <FormControl
                  fullWidth
                  variant='outlined'
                  error={userData.touched.role && Boolean(userData.errors.role)}
                >
                  <InputLabel>Role</InputLabel>
                  <Select
                    label='Role'
                    name='role'
                    disabled={disabled}
                    value={userData.values?.role}
                    onChange={userData.handleChange}
                    onBlur={userData.handleBlur}
                  >
                    <MenuItem value='admin'>Admin</MenuItem>
                    <MenuItem value='developer'>Developer</MenuItem>
                    <MenuItem value='tester'>Tester</MenuItem>
                    <MenuItem value='designer'>Designer</MenuItem>
                  </Select>
                  {userData.touched.role && userData.errors.role ? (
                    <FormHelperText>{userData.errors.role as string}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className='py-4'>
                <span className='text-gray-600 font-spline '>Verify</span>
                <Checkbox
                  title='verified'
                  checked={userData.values?.isVerified}
                  disabled={disabled}
                  name='isVerified'
                  onChange={userData.handleChange}
                />
              </Grid>
              <Grid container item xs={12} className='flex gap-2 justify-between pl-2 py-4'>
                <div className='m-0 pt-1'>
                  <Link href={`/users`} className='link no-underline m-0'>
                    <i className='mdi mdi-less-than me-2' />
                    Back to Users List
                  </Link>
                </div>

                {!hideControls && (
                  <div className='flex gap-4'>
                    <Button variant='contained' type='submit'>
                      Save
                    </Button>
                    <Button variant='text'>
                      <Link href='/users' passHref className='link'>
                        Cancel
                      </Link>
                    </Button>
                  </div>
                )}
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </Container>
  )
}

export default UserDetailsTable
