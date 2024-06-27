const authProtectedRoutes = [
  '/',
  '/dashboard',
  '/users',
  '/users/add/id',
  '/users/edit/id',
  '/users/view/id',
  '/categories',
  '/categories/add/id',
  '/categories/edit/id',
  '/categories/view/id'
]

const publicRoutes = [
  // Authentication Page
  '/logout',
  '/login',
  '/forgot-password',
  '/reset-password',
  '/change-password'
]

export { authProtectedRoutes, publicRoutes }
