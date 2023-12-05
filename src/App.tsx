
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Dashboard from './Pages/Dashboard'


function App() {

  return (
    <QueryClientProvider client={new QueryClient}>
      <Dashboard />
    </QueryClientProvider>
  )
}

export default App
