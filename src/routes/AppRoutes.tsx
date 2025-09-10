import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { BlogList } from '../pages/BlogList'
import { BlogDetail } from '../pages/BlogDetail'
import { Admin } from '../pages/Admin'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { EditPost } from '../pages/EditPost'
import { RequireAuth } from './RequireAuth'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="/blog/edit/:id" element={<EditPost />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/admin"
      element={
        <RequireAuth>
          <Admin />
        </RequireAuth>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
)
