import { useParams } from 'react-router-dom'
import { useLocalPosts } from '../context/LocalPostsContext'
import { useFetchPosts } from '../hooks/useFetchPosts'
import { Loader } from '../components/Loader'

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()
  const postId = Number(id)
  const { localPosts } = useLocalPosts()
  const { posts, loading } = useFetchPosts()

  if (loading) return <Loader />

  const post =
    localPosts.find((p) => p.id === postId) ||
    posts.find((p) => p.id === postId)

  if (!post) return <p className="text-center mt-10">Post not found</p>

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
