import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { FlashMessage } from './components/FlashMessage'
import { FlashProvider } from './context/FlashContext'
import { LocalPostsProvider } from './context/LocalPostsContext'

function App() {
  return (
    <AuthProvider>
      <LocalPostsProvider>
        <FlashProvider>
          <BrowserRouter>
            <Navbar />
            <FlashMessage />
            <AppRoutes />
          </BrowserRouter>
        </FlashProvider>
      </LocalPostsProvider>
    </AuthProvider>
  )
}

export default App
