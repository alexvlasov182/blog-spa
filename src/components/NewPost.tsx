import { useState } from 'react'

import { useLocalPosts } from '../hooks/useLocalPosts'
import { useFlash } from '../context/FlashContext'
import { useNavigate } from 'react-router-dom'

export const NewPostForm = () => {
  const { addPost } = useLocalPosts()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { setFlash } = useFlash()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !body.trim()) {
      setFlash({ type: 'error', text: 'Title and body cannot be empty!' })

      return
    }
    addPost(title, body)
    setFlash({ type: 'success', text: 'Post created!' })

    navigate('/blog')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        className="w-full border rounded-lg p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border rounded-lg p-2"
        placeholder="Write your post..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Create Post
      </button>
    </form>
  )
}
