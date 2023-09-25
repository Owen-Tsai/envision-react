import { Menu as AMenu, Skeleton } from 'antd'
import {
  AppstoreOutlined,
  DeploymentUnitOutlined,
  CodeSandboxOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { menu as staticMenu } from '@/routes'
import { getMenu } from '@/api/menu'
import { MenuItem, ERemoteMenuItem } from '@/types'
import style from '@/styles/menu.module.scss'
import config from '../../config.json'

const iconDom = (iconName: string): JSX.Element => {
  switch (iconName) {
    case 'dashboard':
      return <AppstoreOutlined />
    case 'org':
      return <DeploymentUnitOutlined />
    case 'project':
      return <CodeSandboxOutlined />
    case 'setting':
      return <SettingOutlined />
    default:
      return <></>
  }
}

const transformMenu = (items: ERemoteMenuItem[]) => {
  const transformed = items.map((e) => {
    const { iconName, ...rest } = e
    return iconName ? { ...rest, icon: iconDom(iconName) } : { ...rest }
  })

  return transformed
}

export default function Menu() {
  const [loading, setLoading] = useState(false)
  const [menu, setMenu] = useState<MenuItem[]>()
  const [path, setPath] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>([])

  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    setPath([pathname])
    const portions = pathname.split('/')
    if (portions.length > 2) {
      let [, ...rest] = portions
      rest.pop()
      rest = rest.map((p) => `/${p}`)
      console.log(rest)
      setExpanded(rest)
    }
  }, [pathname])

  useEffect(() => {
    if (config.menuType === 'static') {
      setMenu(staticMenu)
    } else {
      setLoading(true)
      getMenu().then((res) => {
        const { menu: remoteMenu } = res.data
        setMenu(transformMenu(remoteMenu))
        setLoading(false)
      })
    }
  }, [])

  const navigateTo = (key: string) => {
    // if (path[0] === key) return
    navigate(key)
  }

  const onMenuOpen = (key: string[]) => {
    setExpanded(key)
  }

  return loading ? (
    <div className={style.loading}>
      {Array.from({ length: 5 }, (_, i) => (
        <Skeleton.Input
          className="!w-full max-w-full"
          active={loading}
          key={i}
        />
      ))}
    </div>
  ) : (
    <AMenu
      items={menu}
      mode="inline"
      selectedKeys={path}
      openKeys={expanded}
      onSelect={(e) => navigateTo(e.key)}
      onOpenChange={(e) => onMenuOpen(e)}
      className="h-full"
    />
  )
}
