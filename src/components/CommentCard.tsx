import type { Comment } from '../hooks/useFetchComments'

export const CommentCard = ({ name, email, body }: Comment) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p className="font-semibold">
      {name} <span className="text-gray-500 text-sm">({email})</span>
    </p>
    <p className="text-gray-700">{body}</p>
  </div>
)
