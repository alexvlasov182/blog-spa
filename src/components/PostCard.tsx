import { Link } from 'react-router-dom'

type PostCardProps = {
  id: number
  title: string
  excerpt: string
}

export const PostCard = ({ id, title, excerpt }: PostCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-600 mt-2 inline-block">
        Read more
      </Link>
    </div>
  )
}
