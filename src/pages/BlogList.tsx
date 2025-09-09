import { useFetchPosts } from '../hooks/useFetchPosts'
import { PostCard } from '../components/PostCard'
import adminImg from '../assets/1.svg'
import { useLocalPosts } from '../hooks/useLocalPosts'

export const BlogList = () => {
  const { posts, loading } = useFetchPosts()
  const { localPosts, deletePost, updatePost } = useLocalPosts()

  const allPosts = [
    ...localPosts.map((p) => ({ ...p, isLocal: true })),
    ...posts.map((p) => ({ ...p, isLocal: false })),
  ]

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading posts...</p>
        </div>
      </div>
    )

  if (!posts.length)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl font-medium">No posts found</p>
      </div>
    )

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl p-10 bg-white rounded-2xl mt-20 mb-20 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Blog Posts
        </h1>
        <div className="flex items-center justify-center">
          <img src={adminImg} alt="Admin img" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.isLocal ? post.body.slice(0, 200) : post.body}
              isLocal={post.isLocal}
              onDelete={post.isLocal ? () => deletePost(post.id) : undefined}
              onEdit={
                post.isLocal
                  ? () => updatePost(post.id, post.title, post.body)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
