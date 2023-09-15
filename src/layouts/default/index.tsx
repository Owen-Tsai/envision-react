import { Layout, Button } from 'antd'
import { BellOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import cn from 'classnames'
import Menu from '@/components/menu'
import logo from '@/assets/logo.svg'
import { useDispatch, useSelector } from '@/hooks/use-store'
import { setTheme } from '@/store/theme'
import style from './style/index.module.scss'

const { Content, Header, Sider } = Layout

export default function DefaultLayout() {
  const currentTheme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  const [collapsed, setCollapsed] = useState(false)

  const toggleDarkMode = () => {
    if (currentTheme === 'light') {
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }
  }

  const themeBtnIcon =
    currentTheme === 'dark' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-sun"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    )

  return (
    <Layout className={style.layout}>
      <Header className={cn(style.header, style[`header-${currentTheme}`])}>
        <div className="flex items-center">
          <img className="h-8 w-8" src={logo} />
          <div className={style.title}>Envision</div>
        </div>

        <div className={style.actions}>
          <Button
            type="text"
            onClick={toggleDarkMode}
            className="ant-btn-icon-only"
          >
            <span className="anticon anticon-bell">{themeBtnIcon}</span>
          </Button>
          <Button type="text" icon={<BellOutlined />} />
        </div>
      </Header>
      <Layout hasSider className="h-full">
        <Sider
          width={240}
          collapsible
          collapsed={collapsed}
          trigger={null}
          className={style.sider}
        >
          <Menu />
          <Button
            size="small"
            shape="circle"
            className={style['collapse-fab']}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </Button>
        </Sider>
        <Content className={style.main}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
