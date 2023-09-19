import Mock from 'mockjs'
import setupMock, { failedResponseWrap, responseWrap } from '@/utils/mock'
import avatar from '@/assets/avatar.jpg'
import { getToken } from '@/utils/auth'
import type { MockParams } from '@/types/index'
import type { UserInfo } from '@/types/user'

setupMock({
  setup() {
    Mock.mock('/api/user/login', (params: MockParams) => {
      const { username, password } = JSON.parse(params.body)
      if (!username) {
        return failedResponseWrap(null, '请填写用户名', 400)
      }
      if (!password) {
        return failedResponseWrap(null, '请填写密码', 400)
      }

      if (username === 'admin' && password === 'admin') {
        window.localStorage.setItem('userRole', 'admin')
        return responseWrap({
          token: 'admin12345',
        })
      }
      if (username === 'user' && password === 'user') {
        window.localStorage.setItem('userRole', 'user')
        return responseWrap({
          token: 'user12345',
        })
      }

      return failedResponseWrap(null, '用户名或密码错误', 403)
    })

    Mock.mock('/api/user/info', 'get', () => {
      const token = getToken()
      if (token !== null) {
        return responseWrap<UserInfo>({
          username: '蔡仲晨',
          avatar,
          dept: '体验技术部',
          email: 'owentsai.v@gmail.com',
          id: 1,
          introduction: 'To the infinity and beyond.',
          job: '首席喝水官（CDO）',
          role: 'admin',
        })
      }

      return failedResponseWrap(null, '未登录', 403)
    })
  },
})
