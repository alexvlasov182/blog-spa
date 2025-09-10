import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">
      <Link to="/" className="font-bold text-xl text-blue-600">
        BlogSPA
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/blog" className="hover:text-blue-600">
          Blog
        </Link>
        {user ? (
          <>
            <Link to="/admin" className="hover:text-blue-600">
              Admin
            </Link>
            <button
              onClick={logout}
              className="text-red-500 hover:text-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
