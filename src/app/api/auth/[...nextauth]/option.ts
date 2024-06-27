import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const url = 'https://api.smartgrader.in/login'

        console.log('Credentials provided:', credentials)

        if (credentials) {
          try {
            const res = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                accept: 'application/json'
              },
              body: new URLSearchParams({
                grant_type: '',
                username: credentials.username,
                password: credentials.password,
                scope: '',
                client_id: '',
                client_secret: ''
              })
            })

            const resText = await res.text()

            console.log('Response status:', res.status)

            console.log('Response body:', resText)

            if (!res.ok) {
              console.error('Failed to authenticate:', res.statusText)

              return null
            }

            const user = JSON.parse(resText)

            console.log('User data:', user)

            // If no error and we have user data, return it
            if (user) {
              return user
            }

            // Return null if user data could not be retrieved

            return null
          } catch (error) {
            console.error('Error during authentication:', error)

            return null
          }
        }

        return null
      }
    })
  ],

  pages: {
    signIn: '/login'
  }
}
