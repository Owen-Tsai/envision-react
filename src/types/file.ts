import { UserAvatarInfo } from './user'

export type IFileType = 'view' | 'form' | 'visualization'
export type IFileTypeName = '视图' | '事务' | '可视化'

export type IFile = {
  title: string
  team?: string
  project?: string
  desc?: string
  initiator: UserAvatarInfo
  collaborators: UserAvatarInfo[]
  time: string
  type: IFileTypeName
}
