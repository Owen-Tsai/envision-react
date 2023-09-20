import { Menu as AMenu } from 'antd'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { menu } from '@/routes'

export default function Menu() {
  const [path, setPath] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>([])

  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    setPath([pathname])
    const portions = pathname.split('/')
    if (portions.length > 2) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let [, ...rest] = portions
      rest.pop()
      rest = rest.map((p) => `/${p}`)
      console.log(rest)
      setExpanded(rest)
    }
  }, [pathname])

  const navigateTo = (key: string) => {
    // if (path[0] === key) return
    navigate(key)
  }

  const onMenuOpen = (key: string[]) => {
    setExpanded(key)
  }

  return (
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
