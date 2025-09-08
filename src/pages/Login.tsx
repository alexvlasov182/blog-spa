import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login('Alex')
    navigate('/admin')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-10 bg-white rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-4 rounded-lg w-full text-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}
