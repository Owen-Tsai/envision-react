import axios from 'axios'
import type { UserInfo } from '@/types/user'

export type LoginData = {
  username: string
  password: string
}

export type LoginRes = {
  token: string
}

export const login = (data: LoginData) =>
  axios.post<LoginRes>('/api/user/login', data)

export const getUserInfo = () => axios.get<UserInfo>('/api/user/info')
