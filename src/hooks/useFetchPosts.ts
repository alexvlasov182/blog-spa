import { useState, useEffect } from 'react'

type Post = {
  id: number
  title: string
  body: string
  excerpt: string
}

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=20'
        )
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.log('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return { posts, loading }
}

export const useFetchPost = (id: number) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        )
        if (!res.ok) throw new Error('Post not found')
        const data = await res.json()
        setPost(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [id])

  return { post, loading }
}
