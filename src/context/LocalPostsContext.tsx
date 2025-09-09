import {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

// Type of post
export type LocalPost = {
  isLocal?: boolean
  id: number
  title: string
  body: string
}

// Context type
type LocalPostsContextType = {
  localPosts: LocalPost[]
  addPost: (title: string, body: string) => void
  updatePost: (id: number, title: string, body: string) => void
  deletePost: (id: number) => void
}

const STORAGE_KEY = 'myPosts'

// Create Contex
const LocalPostsContext = createContext<LocalPostsContextType | undefined>(
  undefined
)

// Provider
export const LocalPostsProvider = ({ children }: { children: ReactNode }) => {
  const [localPosts, setLocalPosts] = useState<LocalPost[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setLocalPosts(JSON.parse(stored))
  }, [])

  const savePosts = (posts: LocalPost[]) => {
    setLocalPosts(posts)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  }

  const addPost = (title: string, body: string) => {
    const newPost: LocalPost = { id: Date.now(), title, body, isLocal: true }
    savePosts([newPost, ...localPosts])
  }

  const updatePost = (id: number, title: string, body: string) => {
    const updatedPosts = localPosts.map((p) =>
      p.id === id ? { ...p, title, body } : p
    )
    savePosts(updatedPosts)
  }

  const deletePost = (id: number) => {
    savePosts(localPosts.filter((p) => p.id !== id))
  }

  return (
    <LocalPostsContext.Provider
      value={{ localPosts, addPost, updatePost, deletePost }}
    >
      {children}
    </LocalPostsContext.Provider>
  )
}

// Export hooks
// eslint-disable-next-line react-refresh/only-export-components
export const useLocalPosts = () => {
  const context = useContext(LocalPostsContext)
  if (!context)
    throw new Error('useLocalPosts must be used within LocalPostsProvider')
  return context
}
