import { Navigate, type RouteObject } from 'react-router-dom'
import RouterGuard from '@/components/router-guard'
import Login from '@/pages/login/index.tsx'
import DefaultLayout from '@/layouts/default/index.tsx'
import Dashboard from '@/pages/dashboard'
import DeptManagement from '@/pages/dept'
import { ERouteObject } from '@/types'

export const routes: ERouteObject[] = [
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
        meta: {
          title: '工作台 - Envision',
          auth: true,
        },
      },
      {
        path: '/org/dept',
        element: <DeptManagement />,
        meta: {
          title: '工作台 - Envision',
          auth: true,
        },
      },
    ],
  },
]

export const transformRoutes = (rawRoutes: ERouteObject[]): RouteObject[] => {
  const res: RouteObject[] = []
  rawRoutes.forEach((entry) => {
    const routeOpts = entry
    if (entry.element) {
      routeOpts.element = (
        <RouterGuard meta={entry.meta}>{entry.element}</RouterGuard>
      )
    }

    delete routeOpts.meta

    if (entry.children) {
      ;(routeOpts as RouteObject).children = transformRoutes(entry.children)
    }

    res.push(routeOpts as RouteObject)
  })

  return res
}
