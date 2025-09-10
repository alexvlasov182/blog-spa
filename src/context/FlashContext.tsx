import { createContext, useContext, useState, type ReactNode } from 'react'

export type FlashType = 'success' | 'error' | 'info'

interface FlashMessage {
  type: FlashType
  text: string
}

interface FlashContextType {
  flash?: FlashMessage
  setFlash: (message: FlashMessage) => void
  clearFlash: () => void
}

const FlashContext = createContext<FlashContextType | undefined>(undefined)

export const FlashProvider = ({ children }: { children: ReactNode }) => {
  const [flash, setFlashState] = useState<FlashMessage | undefined>()

  const setFlash = (message: FlashMessage) => {
    setFlashState(message)
    setTimeout(() => setFlashState(undefined), 3000)
  }

  const clearFlash = () => setFlashState(undefined)

  return (
    <FlashContext.Provider value={{ flash, setFlash, clearFlash }}>
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
