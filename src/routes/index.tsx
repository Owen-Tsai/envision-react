import { Navigate, type RouteObject } from 'react-router-dom'
import {
  AppstoreOutlined,
  DeploymentUnitOutlined,
  // CodeSandboxOutlined,
  // SettingOutlined,
} from '@ant-design/icons'
import RouterGuard from '@/components/router-guard'
import Login from '@/pages/login/index.tsx'
import DefaultLayout from '@/layouts/default/index.tsx'
import Dashboard from '@/pages/dashboard'
import DeptManagement from '@/pages/dept'
import { EMenuItem, ERoutesMapItem } from '@/types'

// TODO: generate menu based on routesMap
// create router by flatten routesMap and append default routes (*, /, /redirect, /login, etc)
const routesMap: ERoutesMapItem[] = [
  {
    label: '工作台',
    path: '/dashboard',
    element: <Dashboard />,
    meta: {
      title: '工作台 - Envision',
      icon: <AppstoreOutlined />,
    },
  },
  {
    label: '组织结构',
    path: '/org',
    element: null,
    meta: {
      icon: <DeploymentUnitOutlined />,
    },
    children: [
      {
        label: '部门管理',
        path: '/org/department',
        element: <DeptManagement />,
        meta: {
          title: '部门管理 - Envision',
        },
      },
    ],
  },
]

export const defaultRoutes: RouteObject[] = [
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
    children: [],
  },
  // TODO: add exception page
]

export const flattenRoutesMap = (map: ERoutesMapItem[]) => {
  const travel = (nodes: ERoutesMapItem[], res: RouteObject[] = []) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (node.element !== null) {
        const { path, element, meta } = node
        res.push({
          path,
          element: <RouterGuard meta={meta}>{element!}</RouterGuard>,
        })
      }

      if (node.children) {
        travel(node.children, res)
      }
    }

    return res
  }

  const flattenedRoutes: RouteObject[] = []
  travel(map, flattenedRoutes)

  return flattenedRoutes
}

const generateRoutes = () => {
  const res = defaultRoutes
  res[2].children = flattenRoutesMap(routesMap)
  return res
}

const generateMenu = () => {
  const travel = (map: ERoutesMapItem[]) => {
    const res = map.map((entry) => {
      const { path, label, meta } = entry
      const item: EMenuItem = {
        label: label || '',
        key: path,
      }
      if (meta?.icon) {
        item.icon = meta.icon
      }

      if (entry.children) {
        item.children = travel(entry.children)
      }

      return item
    })
    console.log(res)
    return res
  }

  return travel(routesMap)
}

export const routes = generateRoutes()
export const menu = generateMenu()
