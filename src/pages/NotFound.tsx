import { Link } from 'react-router-dom'

export const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <Link to="/" className="text-blue-600 hover:underline">
      Go Home
    </Link>
  </div>
)
