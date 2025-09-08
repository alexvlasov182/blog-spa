import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { JSX } from 'react'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" replace />
}
