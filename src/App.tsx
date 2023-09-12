import { ConfigProvider, theme, App as AntApp } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { useSelector } from '@/hooks/use-store'
import router from '@/routes/index.tsx'

export default function App() {
  const mode = useSelector((state) => state.theme.value)
  const algorithm =
    mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm

  return (
    <ConfigProvider
      theme={{
        algorithm,
      }}
    >
      <AntApp className={`theme-${mode} h-full`}>
        <RouterProvider router={router} />
      </AntApp>
    </ConfigProvider>
  )
}
