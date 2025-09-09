import { useParams, Link } from 'react-router-dom'
import { useFetchPost } from '../hooks/useFetchPosts'
import { CommentList } from './CommentList'

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()
  const postId = Number(id)
  const { post, loading } = useFetchPost(postId)

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading post...</p>
        </div>
      </div>
    )

  if (!post)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl font-medium">Post not found</p>
      </div>
    )

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full mx-auto p-8 mt-10 mb-10 bg-white rounded-xl shadow-lg">
        {/* Blog Content */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {post.title}
        </h1>
        <p className="mb-6 text-gray-700">{post.body}</p>

        <div className="text-center mb-8">
          <Link
            to="/blog"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Comments */}
        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Comments
          </h2>
          <CommentList postId={postId} />
        </div>
      </div>
    </div>
  )
}
