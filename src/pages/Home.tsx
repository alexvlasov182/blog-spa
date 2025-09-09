import homeImg from '../assets/3.svg'
import { NewPostForm } from '../components/NewPost'

export const Home = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to BlogSPA</h1>
      <img src={homeImg} alt="Home img" />
      <NewPostForm />
      <p className="mt-4 text-gray-600">
        Learn React Router, Clean Architecture, and Tailwind
      </p>
    </div>
  </div>
)
