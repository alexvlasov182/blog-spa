import { useLocalPosts as useLocalPostsContext } from '../context/LocalPostsContext'
import { useFlash } from '../context/FlashContext'

export const useLocalPosts = () => {
  const context = useLocalPostsContext()
  const { setFlash } = useFlash()

  const addPost = (title: string, body: string) => {
    if (!title.trim() || !body.trim()) {
      setFlash({ type: 'error', text: 'Title and body cannot be empty!' })
      return
    }
    context.addPost(title, body)
    setFlash({ type: 'success', text: '✅ Post created!' })
  }

  const updatePost = (id: number, title: string, body: string) => {
    if (!title.trim() || !body.trim()) {
      setFlash({ type: 'error', text: 'Title and body cannot be empty!' })
      return
    }
    context.updatePost(id, title, body)
    setFlash({ type: 'info', text: '✏️ Post updated!' })
  }

  const deletePost = (id: number) => {
    context.deletePost(id)
    setFlash({ type: 'error', text: 'Post deleted!' })
  }

  return { ...context, addPost, updatePost, deletePost }
}
