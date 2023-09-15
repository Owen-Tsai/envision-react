import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/pages/login/index.tsx'
import DefaultLayout from '@/layouts/default/index.tsx'
import Dashboard from '@/pages/dashboard'
import DeptManagement from '@/pages/dept'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        index: true,
      },
      {
        path: '/org/dept',
        element: <DeptManagement />,
      },
    ],
  },
])

export default router
