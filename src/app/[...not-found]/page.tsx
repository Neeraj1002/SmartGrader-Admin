// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@/views/auth/NotFound'

const NotFoundPage = () => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <BlankLayout>
        <NotFound />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
