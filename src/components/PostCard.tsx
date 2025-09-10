import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  excerpt: string
  isLocal?: boolean
  onEdit?: () => void
  onDelete?: () => void
}

export const PostCard = ({
  id,
  title,
  excerpt,
  isLocal,
  onEdit,
  onDelete,
}: Props) => {
  const handleDelete = () => {
    if (!onDelete) return
    const ok = confirm('Are you sure you want to delete this post?')
    if (ok) onDelete()
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition relative">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-600 hover:underline">
        Read more
      </Link>

      {isLocal && (
        <div className="absolute top-3 right-3 flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="text-yellow-500 hover:text-yellow-600"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  )
}
