import React from 'react';
import { router } from '@/app/providers';
import { RouterProvider } from 'react-router-dom';
import '@/app/styles/index.scss';

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}
