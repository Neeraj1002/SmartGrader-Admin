import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
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

            if (!res.ok) {
              console.error('Authentication failed:', resText)

              return null
            }

            const user = JSON.parse(resText)

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

        // Return null if no credentials were provided
        return null
      }
    })
  ],

  pages: {
    signIn: '/login'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
