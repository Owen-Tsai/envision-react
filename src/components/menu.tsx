import {
  AppstoreOutlined,
  DeploymentUnitOutlined,
  CodeSandboxOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Menu as AMenu, Skeleton } from 'antd'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMenu } from '@/api/menu'
import { EMenuItem } from '@/types'

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

export default function Menu() {
  const [menu, setMenu] = useState<EMenuItem[]>()
  const [path, setPath] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getMenuItems = async () => {
    const res = (await getMenu()).data.menu
    return res
  }

  useEffect(() => {
    getMenuItems()
      .then((res) => {
        const r = res
        r.map((e) => {
          if (e.iconName) {
            e.icon = iconDom(e.iconName)
          }

          return e
        })
        setMenu(res)
        setPath(['/dashboard'])
        setLoading(false)
      })
      .catch((e) => {
        console.error('获取菜单错误', e)
      })
  }, [])

  const navigateTo = (key: string) => {
    if (path[0] === key) return
    setPath([key])
    navigate(key)
  }

  return loading ? (
    <div className="flex flex-col gap-2 h-full bg-[#fff] p-6">
      {Array(5).fill(
        <Skeleton.Input className="!w-full max-w-full" active={loading} />,
      )}
    </div>
  ) : (
    <AMenu
      items={menu}
      mode="inline"
      selectedKeys={path}
      onSelect={(e) => navigateTo(e.key)}
      className="h-full"
    />
  )
}
