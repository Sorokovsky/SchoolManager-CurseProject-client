import { RouterProvider } from 'react-router';
import './App.scss';
import { router } from '@/routing/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      enabled: true,
      retry: false,
      retryOnMount: true,
      refetchOnReconnect: true,
      staleTime: 0,
      gcTime: 10 * 60 * 1000
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      </QueryClientProvider>
  )
}

export default App;
