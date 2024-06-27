//Third Party lib Imports
export { default } from 'next-auth/middleware'

//Local Imports
// import { authProtectedRoutes } from './routes/allRoutes'

export const config = { matcher: ['/','/dashboard','/users'] }
