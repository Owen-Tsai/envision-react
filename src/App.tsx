import { useEffect, useState } from 'react'
import { ConfigProvider, theme, App as AntApp } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from '@/hooks/use-store'
import { routes } from '@/routes'
import { isAuthed } from '@/utils/auth'
import { getUserInfo } from '@/api/user'
import { setUserInfo } from '@/store/user'

export default function App() {
  const [loading, setLoading] = useState(false)
  const mode = useSelector((state) => state.theme.value)
  const userInfo = useSelector((state) => state.user.userInfo)
  const algorithm =
    mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  const router = useRoutes(routes)

  const dispatch = useDispatch()
  const authenticated = isAuthed()

  useEffect(() => {
    if (authenticated && !userInfo) {
      setLoading(true)
      getUserInfo().then((res) => {
        dispatch(setUserInfo(res.data))
        setLoading(false)
      })
    }
  }, [authenticated, dispatch, userInfo])

  return loading ? (
    <></>
  ) : (
    <ConfigProvider
      theme={{
        algorithm,
      }}
      locale={zhCN}
    >
      <AntApp className={`theme-${mode} h-full`}>{router}</AntApp>
    </ConfigProvider>
  )
}
