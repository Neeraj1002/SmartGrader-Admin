'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

//NextAuth Imports
import { signIn } from 'next-auth/react'

//formIk imports
import { useFormik } from 'formik'
import * as Yup from 'yup'

// MUI Imports
import {
  FormControlLabel,
  Button,
  Checkbox,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  Card,
  CardContent,
  Typography,
  TextField
} from '@mui/material'

// Component Imports
import Logo from '@components/layout/shared/Logo'

import Loading from '@/app/(dashboard)/loading'

const Login = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Hooks
  const router = useRouter()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Enter valid email address').required('Please Enter Your Email'),
      password: Yup.string().required('Please Enter Your Password')
    }),
    onSubmit: values => {
      if (values) {
        setIsLoading(true)
        setError('')
        logIn(values)
      }
    }
  })

  const logIn = async (values: any) => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        username: values.email,
        password: values.password
      })

      if (res?.error) {
        setIsLoading(false)

        if (res.status === 401) {
          setError('Invalid Username Or Password')
        } else if (res.status === 500) {
          setError('Something wen wrong')
        }
      } else {
        router.push('/') // Redirect on successful login
      }
    } catch (error) {
      console.error('Error during form submission:', error)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      {isLoading && <Loading />}
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-center mbe-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-center item-center '>
              <Typography className='mb-1 text tracking-wide text-slate-800 font-medium font-spline mr-2'>
                Log In as Admin{' '}
              </Typography>
            </div>
            <form
              noValidate
              autoComplete='off'
              onSubmit={e => {
                e.preventDefault()
                validation.handleSubmit()
                return false
              }}
              className='flex flex-col gap-5'
            >
              <FormControl>
                <TextField
                  fullWidth
                  type='email'
                  label='Email'
                  name='email'
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.email}
                  required
                />
                {validation.touched.email && validation.errors.email && (
                  <FormHelperText id='component-error-text' className='text-red-500 m-0 pt-1'>
                    {validation.errors.email}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <TextField
                  required
                  name='password'
                  value={validation.values.password}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  fullWidth
                  label='Password'
                  type={isPasswordShown ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={handleClickShowPassword}
                          onMouseDown={e => e.preventDefault()}
                        >
                          <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                {validation.touched.password && validation.errors.password && (
                  <FormHelperText id='component-error-text' className='text-red-500 m-0 pt-1'>
                    {validation.errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel
                  control={<Checkbox name='agreedToTerms' onChange={validation.handleChange} />}
                  label='Remember me'
                />
                <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                  Forgot password?
                </Typography>
              </div>
              <Button fullWidth variant='contained' type='submit' disabled={!validation.isValid}>
                Log In
              </Button>
            </form>
            {error && (
              <FormHelperText id='component-error-text' className='text-red-500 m-0 pt-1 text-center text-base'>
                {error}
              </FormHelperText>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
