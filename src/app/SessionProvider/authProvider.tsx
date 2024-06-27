'use client'

//Third party imports
import { SessionProvider } from 'next-auth/react'

//local import
import type { ChildrenType } from '@core/types'

export default function AuthProvider({ children }: ChildrenType) {
  return <SessionProvider>{children}</SessionProvider>
}
