export interface Post {
  id: number
  title: string
  body: string
}

const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_URL}/posts?_limit=20`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export const fetchPostById = async (id: number): Promise<Post> => {
  const res = await fetch(`${API_URL}/posts/${id}`)
  if (!res.ok) throw new Error('Post not found')
  return res.json()
}

export const fetchComments = async (postId: number) => {
  const res = await fetch(`${API_URL}/posts/${postId}/comments`)
  if (!res.ok) throw new Error('Failed to fetch comments')
  return res.json()
}
