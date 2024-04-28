import React from 'react';
import { router } from '@/app/providers';
import { RouterProvider } from 'react-router-dom';
import '@/app/styles/index.scss';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const App: React.FC = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
