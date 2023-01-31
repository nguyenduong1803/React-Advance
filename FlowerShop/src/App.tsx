import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Home />
        <Login />
      </div>
    </QueryClientProvider>
  )
}

export default App
