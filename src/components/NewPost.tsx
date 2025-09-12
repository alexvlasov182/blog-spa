import { useState } from 'react'
import { useLocalPosts } from '../context/LocalPostsContext'
import { useFlash } from '../context/FlashContext'
import { useNavigate } from 'react-router-dom'

export const NewPostForm = () => {
  const { addPost } = useLocalPosts()
  const { setFlash } = useFlash()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || title.trim().length < 3) {
      setFlash({ type: 'error', text: 'Title must be at least 3 characters' })
      return
    }
    if (!body.trim() || body.trim().length < 10) {
      setFlash({ type: 'error', text: 'Body must be at least 10 characters' })
      return
    }
    addPost(title, body)
    setFlash({ type: 'success', text: 'Post created!' })
    navigate('/blog')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold">Create New Post</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border rounded p-2"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your post..."
        className="w-full border rounded p-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        Add Post
      </button>
    </form>
  )
}
