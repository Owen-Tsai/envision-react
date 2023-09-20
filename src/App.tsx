import { ConfigProvider, theme, App as AntApp } from 'antd'
import { useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from '@/hooks/use-store'
import { routes } from '@/routes'
import { isAuthed } from '@/utils/auth'
import { getUserInfo } from '@/api/user'
import { setUserInfo } from '@/store/user'
import { useEffect } from 'react'

export default function App() {
  const mode = useSelector((state) => state.theme.value)
  const userInfo = useSelector((state) => state.user.userInfo)
  const algorithm =
    mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  const router = useRoutes(routes)

  const dispatch = useDispatch()
  const authenticated = isAuthed()

  useEffect(() => {
    if (authenticated && !userInfo) {
      getUserInfo().then((res) => {
        dispatch(setUserInfo(res.data))
      })
    }
  }, [authenticated, dispatch, userInfo])

  return (
    <ConfigProvider
      theme={{
        algorithm,
      }}
    >
      <AntApp className={`theme-${mode} h-full`}>{router}</AntApp>
    </ConfigProvider>
  )
}
