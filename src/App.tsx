import { ConfigProvider, theme, App as AntApp } from 'antd'
import { useRoutes } from 'react-router-dom'
import { useSelector } from '@/hooks/use-store'
import { routes, transformRoutes } from '@/routes/index.tsx'

export default function App() {
  const mode = useSelector((state) => state.theme.value)
  const algorithm =
    mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  const router = useRoutes(transformRoutes(routes))

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
