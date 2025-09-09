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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 ease-in-out shadow-md cursor-pointer"
        >
          Login
        </button>

        <p className="text-xs text-center text-gray-400 mt-6">
          © 2025 Blog-SPA. All rights reserved.
        </p>
      </div>
    </div>
  )
}
