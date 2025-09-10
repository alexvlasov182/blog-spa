import { useFetchPosts } from '../hooks/useFetchPosts'
import { PostCard } from '../components/PostCard'
import adminImg from '../assets/1.svg'
import { useLocalPosts } from '../hooks/useLocalPosts'
import { Loader } from '../components/Loader'
import { useNavigate } from 'react-router-dom'

export const BlogList = () => {
  const { posts, loading } = useFetchPosts()
  const { localPosts, deletePost } = useLocalPosts()
  const navigate = useNavigate()

  if (loading) return <Loader />

  const allPosts = [
    ...localPosts.map((p) => ({ ...p, isLocal: true })),
    ...posts.map((p) => ({ ...p, isLocal: false })),
  ] as Array<
    | { id: number; title: string; body: string; isLocal: true }
    | { id: number; title: string; body: string; isLocal: false }
  >

  return (
    <div className="flex flex-col items-center p-10 bg-gray-50 min-h-screen">
      <img src={adminImg} alt="Admin" className="rounded-lg shadow mb-8 w-60" />
      <h1 className="text-4xl font-bold  mb-10 text-center">Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {allPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.body.slice(0, 200)}
            isLocal={post.isLocal}
            onDelete={post.isLocal ? () => deletePost(post.id) : undefined}
            onEdit={
              post.isLocal ? () => navigate(`/blog/edit/${post.id}`) : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}
