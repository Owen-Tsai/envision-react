import axios from 'axios'
import { EMenuItem } from '@/types'

export type MenuRes = {
  menu: EMenuItem[]
}

export const getMenu = () => axios.get<MenuRes>('/api/menu')
