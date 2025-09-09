import { Link } from 'react-router-dom'

type PostCardProps = {
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
  onEdit,
  onDelete,
}: PostCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-600 mt-2 inline-block">
        Read more
      </Link>

      {onEdit && onDelete && (
        <div className="flex gap-2 mt-4">
          <button
            onClick={onEdit}
            className="px-3 py-1 bg-yellow-500 text-white rounded cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}
