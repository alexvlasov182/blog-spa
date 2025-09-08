import { useState, useEffect } from 'react'
import { fetchPosts, fetchPostById, type Post } from '../services/api'

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return { posts, loading }
}

export const useFetchPost = (id: number) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPostById(id).then((data) => {
      if (data) setPost(data)
      setLoading(false)
    })
  }, [id])

  return { post, loading }
}
