import axios from 'axios'
import { ERemoteMenuItem } from '@/types'

export type MenuRes = {
  menu: ERemoteMenuItem[]
}

export const getMenu = () => axios.get<MenuRes>('/api/menu')
