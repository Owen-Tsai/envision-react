import { Tabs } from 'antd'
import { GithubFilled, CopyrightOutlined } from '@ant-design/icons'
import logo from '@/assets/logo.svg'
import style from './style/index.module.scss'
import LoginForm from './login-form.tsx'
import LoginFormMobile from './login-form-mobile.tsx'

export default function Login() {
  return (
    <div className={style.page}>
      <div className="flex-1 py-10">
        <div className="flex items-center justify-center">
          <img className="h-12 w-12 mr-4" src={logo} />
          <h1 className={style.title}>Envision</h1>
        </div>
        <div className={style.subtext}>历下区最具影响力的企业级开发框架</div>

        <Tabs
          className="mt-8"
          style={{ width: 328, minWidth: 280 }}
          centered
          items={[
            {
              label: '账号密码登录',
              key: 'account-login',
              children: <LoginForm />,
            },
            {
              label: '手机号登录',
              key: 'mobile-login',
              children: <LoginFormMobile />,
            },
          ]}
        />
      </div>

      <footer className={style.footer}>
        <div>
          Envision
          <a
            href="https://github.com/Owen-Tsai/envision-react"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <GithubFilled />
          </a>
          v0.1
        </div>
        <div>
          <CopyrightOutlined className="mr-2" /> 2023 All Rights Reserved
        </div>
      </footer>
    </div>
  )
}
