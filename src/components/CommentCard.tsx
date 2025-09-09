type CommentCardProps = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const CommentCard = ({ name, email, body }: CommentCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-gray-50">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{email}</p>
      <p className="text-gray-700">{body}</p>
    </div>
  )
}
