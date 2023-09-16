import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

export type MockParams = {
  url: string
  type: 'GET' | 'POST' | 'PATCH' | 'DELETE'
  body: string
}

export type HTTPResponse = {
  code?: number
  msg?: string
  data: Record<string, unknown>
  success: boolean
}

export type EMenuItem = MenuItem & {
  iconName?: string
  icon?: React.ReactNode
  children?: EMenuItem[]
}

export type RouteMeta = {
  title?: string
  auth?: boolean
}

export type ERouteObject = {
  element: JSX.Element
  path: string
  children?: ERouteObject[]
  meta?: RouteMeta
}
