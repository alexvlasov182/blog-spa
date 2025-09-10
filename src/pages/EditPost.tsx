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
    if (!post) {
      navigate('/blog')
      return
    }
    setTitle(post.title)
    setBody(post.body)
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
      className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg space-y-4"
    >
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full border rounded p-2"
      />
      <div className="flex gap-2">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate('/blog')}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
