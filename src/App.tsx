import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { FlashProvider } from './context/FlashContext'
import { LocalPostsProvider } from './context/LocalPostsContext'
import { FlashMessage } from './components/FlashMessage'

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
