import { useEffect, useState } from 'react'
import { fetchPosts, fetchPostById, type Post } from '../services/api'

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading }
}

export const useFetchPost = (id: number) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPostById(id)
      .then(setPost)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  return { post, loading }
}
