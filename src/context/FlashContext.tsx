// context/FlashContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react'

type FlashType = 'success' | 'info' | 'error'
type Flash = { type: FlashType; text: string }

type FlashContextType = {
  flash: Flash | null
  setFlash: (flash: Flash) => void
}

const FlashContext = createContext<FlashContextType | undefined>(undefined)

export const FlashProvider = ({ children }: { children: ReactNode }) => {
  const [flash, setFlash] = useState<Flash | null>(null)

  return (
    <FlashContext.Provider value={{ flash, setFlash }}>
      {children}
    </FlashContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFlash = () => {
  const context = useContext(FlashContext)
  if (!context) throw new Error('useFlash must be used within FlashProvider')
  return context
}
