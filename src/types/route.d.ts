import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

export type RouteMeta = {
  title?: string
  auth?: boolean
}

export type EPermission = 'read' | 'update' | 'delete'

export type ERoute = {
  path: string
  element?: JSX.Element
  file?: string
  children?: ERoute[]
  meta?: RouteMeta
  permissions?: EPermission[]
}

export type ERoutesMapItem = {
  label?: string
  path: string // route path & menu key
  element: JSX.Element | null // for router registeration
  children?: ERoutesMapItem[] // for menu generation, not nested routes!!
  meta?: {
    title?: string
    icon?: JSX.Element
    permissions?: string[] // use in conjuction with userInfo.roles
    ignore?: boolean
  }
}

export type EMenuItem = {
  label: string
  key: string
  icon?: JSX.Element
  children?: EMenuItem[]
}
