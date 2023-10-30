import axios from 'axios'
import { IFile } from '@/types'

export type FileRes = {
  files: IFile[]
}

export const getRecentFiles = () => axios.get<FileRes>('/api/recent-file')
export const getUserFiles = () => axios.get<FileRes>('/api/file')
