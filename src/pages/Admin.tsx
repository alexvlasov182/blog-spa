export const Admin = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-4xl p-10 bg-white rounded-2xl shadow-2xl text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Admin Dashboard</h1>
      <p className="text-lg text-gray-700 mb-8">
        Only authenticated users can see this page. Here you can manage your
        content, view analytics, or update posts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl mb-2">Manage Posts</h2>
          <p className="text-gray-600">Create, edit, or delete blog posts.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl mb-2">Analytics</h2>
          <p className="text-gray-600">
            View user engagement and traffic stats.
          </p>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl mb-2">Settings</h2>
          <p className="text-gray-600">
            Update profile or application settings.
          </p>
        </div>
      </div>
    </div>
  </div>
)
