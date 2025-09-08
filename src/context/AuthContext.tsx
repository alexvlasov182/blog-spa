import { createContext, type ReactNode, useState } from 'react'

type User = { name: string } | null

type AuthContextType = {
  user: User
  login: (name: string) => void
  logout: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null)

  const login = (name: string) => setUser({ name })
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
