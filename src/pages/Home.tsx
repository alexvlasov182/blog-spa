import { NewPostForm } from '../components/NewPost'
import homeImg from '../assets/3.svg'

export const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <img src={homeImg} alt="Home" className="rounded-lg shadow w-80 mb-6" />
    <h1 className="text-4xl font-bold mb-6">Welcome to BlogSPA</h1>

    <NewPostForm />
    <p className="mt-4 text-gray-600 text-center">
      Learn React Router, Clean Architecture, and Tailwind
    </p>
  </div>
)
