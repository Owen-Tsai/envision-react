import axios from 'axios'
import { IFile } from '@/types'

export type FileRes = {
  files: IFile[]
}

export const getRecentFiles = () =>
  axios
    .get<FileRes>('/api/recent-file')
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.error(err)
    })
export const getUserFiles = () => axios.get<FileRes>('/api/file')
