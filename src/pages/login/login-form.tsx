import { Form, Button, Input, Checkbox, Typography, Alert, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react'
import cn from 'classnames'
import { useLocalStorageState } from 'ahooks'
import { useDispatch } from '@/hooks/use-store'
import { login, getUserInfo, type LoginData } from '@/api/user'
import { setUserInfo, setToken } from '@/store/user'

type Props =
  | {
      classname?: string
    }
  | undefined

const { Link } = Typography

export default function LoginForm(props: Props) {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [autoLogin, setAutoLogin] = useLocalStorageState<boolean>(
    'envision-auto-login',
    {
      defaultValue: false,
    },
  )
  const [messageApi, contextHolder] = message.useMessage()
  const dispatch = useDispatch()

  const handlePostLogin = async (token: string) => {
    // TODO: get userInfo via token
    // save both token and userInfo
    dispatch(setToken(token))
    try {
      const userInfo = (await getUserInfo()).data
      dispatch(setUserInfo(userInfo))
      console.log('get user info', userInfo)
    } catch (err) {
      // Do nothing at the moment
    }
  }

  const handleSubmit = async (values: LoginData) => {
    if (loading) return
    setLoading(true)
    try {
      const res = await login(values)
      const { token } = res.data
      console.log('token is', token)
      messageApi.success('登录成功')
      handlePostLogin(token)
      // TODO: check for redirect param
      //       and navigate to the workplace
    } catch (err) {
      setErrorMsg((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {contextHolder}
      {!!errorMsg && <Alert type="error" message={errorMsg} showIcon />}
      <Form
        size="large"
        className={cn(props?.classname, 'mt-6')}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item<LoginData>
          name="username"
          rules={[{ required: true, message: '用户名不可为空' }]}
        >
          <Input
            prefix={<UserOutlined />}
            allowClear
            placeholder="请输入用户名"
          />
        </Form.Item>
        <Form.Item<LoginData>
          name="password"
          rules={[{ required: true, message: '密码不可为空' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            allowClear
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item noStyle>
          <div className="flex items-center justify-between mb-4">
            <Checkbox
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
            >
              自动登录
            </Checkbox>
            <Link>忘记密码？</Link>
          </div>
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          登录
        </Button>
      </Form>
    </>
  )
}
