import { authProtectedRoutes } from './routes/allRoutes'

//Third Party lib Imports
export { default } from 'next-auth/middleware'

//Local Imports
// import { authProtectedRoutes } from './routes/allRoutes'

export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/users',
    '/users/add',
    '/users/edit/id',
    '/users/view/id',
    '/categories',
    '/categories/add/id',
    '/categories/edit/id',
    '/categories/view/id'
  ]
}
