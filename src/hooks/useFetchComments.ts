import { useState, useEffect } from 'react'

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const useFetchComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!postId) return

    const fetchComments = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        )
        if (!res.ok) throw new Error('Failed to fetch comments')
        const data = await res.json()
        setComments(data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchComments()
  }, [postId])

  return { comments, loading, error }
}
