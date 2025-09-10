import { useEffect, useState } from 'react'
import { fetchComments } from '../services/api'

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export const useFetchComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchComments(postId)
      .then(setComments)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [postId])

  return { comments, loading }
}
