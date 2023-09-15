import { Form, Button, Input, Alert } from 'antd'
import { MobileOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useCountDown, useToggle } from 'ahooks'

type FieldType = {
  mobile: string
  captcha: string
}

export default function LoginFormMobile() {
  const [formLoading, { toggle: toggleFormLoading }] = useToggle()
  const [captchaLoading, { toggle: toggleCaptchaLoading }] = useToggle()
  const [errorMsg, setErrorMsg] = useState('')
  const [count, setCount] = useState<number>(0)

  const [countDown] = useCountDown({
    targetDate: count,
  })

  const fetchCaptcha = () => {
    // TODO: wait loading
    setCount(Date.now() + 60000)
  }

  return (
    <>
      {!!errorMsg && <Alert type="error" message={errorMsg} showIcon />}
      <Form size="large" className="mt-6" autoComplete="off">
        <Form.Item<FieldType>
          name="mobile"
          rules={[{ required: true, message: '手机号不可为空' }]}
        >
          <Input
            prefix={<MobileOutlined />}
            allowClear
            placeholder="请输入手机号"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="captcha"
          rules={[{ required: true, message: '验证码不可为空' }]}
        >
          <div className="flex items-center justify-between gap-4">
            <Input
              prefix={<LockOutlined />}
              allowClear
              placeholder="请输入验证码"
              maxLength={4}
            />
            <Button
              disabled={countDown > 0}
              loading={captchaLoading}
              onClick={fetchCaptcha}
            >
              {countDown <= 1
                ? '获取验证码'
                : `${Math.round(countDown / 1000)}秒后重新获取`}
            </Button>
          </div>
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={formLoading}>
          登录
        </Button>
      </Form>
    </>
  )
}
