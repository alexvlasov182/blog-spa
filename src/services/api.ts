export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'React Router v6 Guide',
    excerpt: 'Learn nested routes.',
    content: 'Full article content...',
  },
  {
    id: 2,
    title: 'Clean Architecture',
    excerpt: 'Organize your React projects.',
    content: 'Full article content...',
  },
  {
    id: 3,
    title: 'Tailwind Tips',
    excerpt: 'Make your UI beautiful.',
    content: 'Full article content...',
  },
]

export const fetchPosts = (): Promise<Post[]> =>
  new Promise((resolve) => setTimeout(() => resolve(posts), 500))

export const fetchPostById = (id: number): Promise<Post | undefined> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(posts.find((p) => p.id === id)), 500)
  )
