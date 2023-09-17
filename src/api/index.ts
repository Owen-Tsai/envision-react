import axios from 'axios'
// import { message } from 'antd'
import type { AxiosResponse } from 'axios'
import store from '@/store/index'

axios.interceptors.request.use(
  (config) => {
    // const token = getToken()
    const { token } = store.getState().user
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token
    }

    return config
  },
  (error) => Promise.reject(error),
)

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (!res.success) {
      // message.error({
      //   content: res.msg || 'Error',
      //   duration: 5000,
      // })

      console.error('请求错误', res)
      return Promise.reject(new Error(res.msg || '未命名的错误'))
    }

    return res
  },
  (error) => {
    // message.error({
    //   content: error.msg || 'Request Error',
    //   duration: 5000,
    // })
    console.error('请求错误', error)
    return Promise.reject(error)
  },
)
