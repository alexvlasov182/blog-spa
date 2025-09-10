import { useFetchComments } from '../hooks/useFetchComments'
import { CommentCard } from '../components/CommentCard'

interface CommentListProps {
  postId: number
}

export const CommentList = ({ postId }: CommentListProps) => {
  const { comments, loading } = useFetchComments(postId)

  if (loading) return <p className="text-gray-500">Loading comments...</p>
  if (!comments.length) return <p className="text-gray-500">No comments yet.</p>

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </div>
  )
}
