import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLocalPosts } from '../hooks/useLocalPosts'
import { useFlash } from '../context/FlashContext'

export const EditPost = () => {
  const { id } = useParams<{ id: string }>()
  const postId = Number(id)
  const navigate = useNavigate()
  const { localPosts, updatePost } = useLocalPosts()
  const { setFlash } = useFlash()

  const post = localPosts.find((p) => p.id === postId)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
    } else {
      navigate('/blog')
    }
  }, [post, navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !body.trim()) {
      setFlash({ type: 'error', text: 'Title and body cannot be empty!' })
      return
    }

    updatePost(postId, title, body)
    setFlash({ type: 'info', text: 'Post updated!' })
    navigate('/blog')
  }

  if (!post) return null

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-4 p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <input
        className="w-full border rounded-lg p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border rounded-lg p-2"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
        Save Changes
      </button>
    </form>
  )
}
