import {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

export type LocalPost = {
  id: number
  title: string
  body: string
}

type LocalPostsContextType = {
  localPosts: LocalPost[]
  addPost: (title: string, body: string) => LocalPost
  updatePost: (id: number, title: string, body: string) => void
  deletePost: (id: number) => void
}

const STORAGE_KEY = 'myPosts_v1'

const LocalPostsContext = createContext<LocalPostsContextType | undefined>(
  undefined
)

export const LocalPostsProvider = ({ children }: { children: ReactNode }) => {
  const [localPosts, setLocalPosts] = useState<LocalPost[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    try {
      return JSON.parse(raw) as LocalPost[]
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localPosts))
  }, [localPosts])

  const addPost = (title: string, body: string) => {
    const newPost: LocalPost = { id: Date.now(), title, body }
    setLocalPosts((prev) => [newPost, ...prev])
    return newPost
  }

  const updatePost = (id: number, title: string, body: string) => {
    setLocalPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, title, body } : p))
    )
  }

  const deletePost = (id: number) => {
    setLocalPosts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <LocalPostsContext.Provider
      value={{ localPosts, addPost, updatePost, deletePost }}
    >
      {children}
    </LocalPostsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLocalPosts = () => {
  const ctx = useContext(LocalPostsContext)
  if (!ctx)
    throw new Error('useLocalPosts must be used inside LocalPostsProvider')
  return ctx
}
