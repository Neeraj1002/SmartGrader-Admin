//Third Party lib Imports
export { default } from 'next-auth/middleware'

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
