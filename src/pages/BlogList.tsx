import { useFetchPosts } from '../hooks/useFetchPosts'
import { PostCard } from '../components/PostCard'

export const BlogList = () => {
  const { posts, loading } = useFetchPosts()

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
      <div className="w-full max-w-5xl p-10 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Blog Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
