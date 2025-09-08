import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="flex gap-4">
        <Link to="/" className="font-bold">
          BlogSPA
        </Link>
        <Link to="/blog">Blog</Link>
        {user && <Link to="/admin">Admin</Link>}
      </div>
      <div>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-green-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
