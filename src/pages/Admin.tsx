import adminImg from '../assets/5.svg'

export const Admin = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">
    <h1 className="text-4xl font-bold mb-6 ">Admin Dashboard</h1>
    <img src={adminImg} alt="Admin" className="rounded-lg shadow mb-8 w-80" />
    <p className="text-gray-700 mb-8 text-center">
      Only authenticated users can see this page. Manage posts, view analytics,
      or update settings.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
        <h2 className="font-semibold text-xl mb-2">Manage Posts</h2>
        <p className="text-gray-600">Create, edit, or delete blog posts.</p>
      </div>
      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
        <h2 className="font-semibold text-xl mb-2">Analytics</h2>
        <p className="text-gray-600">View user engagement and traffic stats.</p>
      </div>
      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
        <h2 className="font-semibold text-xl mb-2">Settings</h2>
        <p className="text-gray-600">Update profile or application settings.</p>
      </div>
    </div>
  </div>
)
